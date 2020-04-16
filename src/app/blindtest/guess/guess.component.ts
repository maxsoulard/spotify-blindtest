import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { guess } from '../state/guess.actions';
import { BlindtestState, getPlayerScore } from '../state/guess.reducer';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {

  userInput = '';

  constructor(private store: Store<BlindtestState>) { }

  ngOnInit() {
    this.store.pipe(
      select(getPlayerScore)
    ).subscribe(() => {
      this.userInput = '';
    });
  }

  guess($event) {
    if ($event.key.toLowerCase() === 'enter') {
      this.store.dispatch(guess({userInput: this.userInput}));
    }
  }
}
