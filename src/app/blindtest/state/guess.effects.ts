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
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

/* const submitFinalScore = gql`
  mutation($userId: ID!, $score: Int!) {
    addGameToHistory(userId: $userId, score: $score) {
      id
      score
      user {
        id
        name
      }
    }
  }`; */

@Injectable()
export class GuessEffects {
  constructor(private store: Store<any>, private actions$: Actions, private blindtestService: BlindtestService, private apollo: Apollo) {}

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

  @Effect()
  submitFinalScore$ = this.actions$.pipe(
    ofType(guessActions.endGame),
    mergeMap(() => {
      return this.store.pipe(
        take(1),
/*         switchMap((state: {player: PlayerState, blindtest: BlindtestState}) => {
          return this.apollo.mutate({
            mutation: submitFinalScore,
            variables: {
              userId: localStorage.getItem('user_id'),
              score: state.blindtest.finalScore,
            }
          })
        }), */
        map(() => guessActions.submitFinalScoreSuccess()),
        catchError(error => {
          console.error(error);
          this.store.dispatch(guessActions.submitFinalScoreFail(error));
          return of({error})
        })
      );
    })
  );
}
