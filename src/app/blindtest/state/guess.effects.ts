import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import * as guessActions from './guess.actions';
import { of } from 'rxjs';

@Injectable()
export class GuessEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  evaluateGuess$ = this.actions$.pipe(
    ofType(guessActions.guess),
    mergeMap((payload) => {
      // TODO evaluate guess user input then dispatch action guess success or guess fail
      console.log(payload.userInput);
      return of(guessActions.guessSuccess({score: 10}));
    })
  )
}
