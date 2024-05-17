import { Component, Input } from '@angular/core';
import { Character } from '../character.model';
import { ApiService } from '../api.service';
import { ScoreService } from '../score/score.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() character: Character;
  isClicked = false;

  constructor(
    private apiService: ApiService,
    private scoreService: ScoreService,
  ) {}

  onClick() {
    this.apiService.shuffleCharacters();
    this.isClicked = !this.isClicked;
    this.scoreService.incrementCurrentScore();
  }
}
