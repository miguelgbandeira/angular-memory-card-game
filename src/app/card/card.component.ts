import { Component, Input } from '@angular/core';
import { Character } from '../character.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() character: Character;
  isClicked = false;

  constructor(private apiService: ApiService) {}

  onClick() {
    this.apiService.shuffleCharacters();
    this.isClicked = !this.isClicked;
  }
}
