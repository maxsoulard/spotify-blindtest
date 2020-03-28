import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ScoreService } from './score.service';
import { getPlayerScore } from '../state/guess.reducer';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  providers: [ ScoreService ]
})
export class ScoreComponent implements OnInit {

  playerScore: number = 0;

  constructor(private store: Store<{ guess: string }>, private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.store.select(getPlayerScore)
      .subscribe(playerScore => this.playerScore = playerScore);
  }
}
