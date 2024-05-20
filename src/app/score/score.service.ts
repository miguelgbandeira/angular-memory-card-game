import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  currentScore = 0;
  highestScore = 0;
  currentScoreChanged = new Subject<number>();
  highestScoreChanged = new Subject<number>();

  constructor() {}

  incrementCurrentScore() {
    this.currentScore += 1;
    this.currentScoreChanged.next(this.currentScore);
  }

  resetCurrentScore() {
    this.currentScore = 0;
    this.currentScoreChanged.next(this.currentScore);
  }

  updateHighestScore(number: number) {
    this.highestScore += number;
    this.highestScoreChanged.next(this.highestScore);
  }
}
