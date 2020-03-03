import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, tap, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { guess } from 'src/app/actions/guess.actions';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {

  private guessTerms = new Subject<string>();

  constructor(private store: Store<{ guess: string }>) { }

  ngOnInit() {
    this.guessTerms.pipe(
      debounceTime(300),
      filter(terms => !!terms),
    ).subscribe(terms => this.store.dispatch(guess({userInput: terms})));
  }

  guess($event, term) {
    if ($event.key.toLowerCase() === 'enter') {
      this.guessTerms.next(term);
    }
  }
}
