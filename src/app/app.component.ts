import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Character } from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.characters = this.apiService.fetchCharacters();
    this.apiService.shuffledCharacters.subscribe((list: Character[]) => {
      this.characters = list;
    });
    this.apiService.reinitCardsSubject.subscribe(() => {
      this.reinitCards();
    });
  }

  reinitCards() {
    const temp = [...this.characters];
    this.characters = [];
    setTimeout(() => {
      this.characters = temp;
    }, 0);
  }
}
