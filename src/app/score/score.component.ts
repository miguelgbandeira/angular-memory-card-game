import { Component, OnInit } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
})
export class ScoreComponent implements OnInit {
  currentScore: number;
  highestScore: number;

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.currentScore = this.scoreService.currentScore;
    this.highestScore = this.scoreService.highestScore;
    this.scoreService.currentScoreChanged.subscribe((score) => {
      this.currentScore = score;
    });
    this.scoreService.highestScoreChanged.subscribe((score) => {
      this.highestScore = score;
    });
  }
}
