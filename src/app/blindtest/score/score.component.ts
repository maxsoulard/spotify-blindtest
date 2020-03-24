import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ScoreService } from './score.service';
import { getGuessUserInput } from '../state/guess.reducer';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  providers: [ ScoreService ]
})
export class ScoreComponent implements OnInit {

  constructor(private store: Store<{ guess: string }>, private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.store.pipe(
      select(getGuessUserInput),
      tap(test => console.log(test)),
      switchMap(userInput => this.scoreService.guess(userInput, this.store)),
    ).subscribe(score => console.log(score));
  }
}
