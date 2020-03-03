import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { guess } from '../state/guess.actions';
import { BlindtestState } from '../state/guess.reducer';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {

  constructor(private store: Store<BlindtestState>) { }

  ngOnInit() {
  }

  guess($event, userInput) {
    if ($event.key.toLowerCase() === 'enter') {
      this.store.dispatch(guess({userInput}));
    }
  }
}
