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
    if (this.isClicked) {
      console.log('if clicked');
      alert(`You lost! You have already selected ${this.character.name}`);
      this.apiService.reinitCards();
      if (this.scoreService.currentScore > this.scoreService.highestScore) {
        console.log('it is bigger');
        this.scoreService.updateHighestScore(this.scoreService.currentScore);
      }
      this.scoreService.resetCurrentScore();
    } else {
      this.apiService.shuffleCharacters();
      this.isClicked = !this.isClicked;
      this.scoreService.incrementCurrentScore();
      console.log(this.isClicked);
    }
  }
}
