import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  currentScore = 0;
  highestScore = 0;

  constructor() {}

  incrementCurrentScore() {
    this.currentScore += 1;
  }
  incrementHighestScore() {
    this.highestScore += 1;
  }
}
