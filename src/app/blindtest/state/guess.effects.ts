import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, take, map, switchMap, catchError } from 'rxjs/operators';
import * as guessActions from './guess.actions';
import * as playActions from '../../spotify-player/state/play.actions';
import { BlindtestService } from '../services/blindtest.service';
import { BlindtestState } from './guess.reducer';
import { PlayerState } from 'src/app/spotify-player/state/play.reducer';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable()
export class GuessEffects {
  constructor(private store: Store<any>, private actions$: Actions, private blindtestService: BlindtestService) {}

  @Effect()
  evaluateGuess$ = this.actions$.pipe(
    ofType(guessActions.guess),
    mergeMap((payload) => {
      return this.store.pipe(
        take(1),
        switchMap((state: {player: PlayerState, blindtest: BlindtestState}) => {
          return this.blindtestService.evaluatePlayerGuess(payload.userInput, state.player.trackPlaying);
        }),
        map((result: {score: number}) => guessActions.guessSuccess(result)),
        catchError(error => {
          if (error.message === 'Wrong answer') {
            return of({}).pipe(map(() => guessActions.guessFail()));
          }
        })
      );
    })
  );

  @Effect()
  guessSuccess$ = this.actions$.pipe(
    ofType(guessActions.guessSuccess),
    map(() => playActions.play())
  );
}
