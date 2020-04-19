import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, take, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as gameActions from './game.actions';
import { GameState } from './game.reducer';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const startNewGameMutation = gql`
  mutation CreateNewGame($userId: ID!) {
    newGame: startNewGame(userId: $userId) {
      id
      tracks {
        id
        name
        uri
        artists {
          id
          name
        }
      }
      user(userId: $userId) {
        id
        name
      }
    }
  }`;

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions, private apollo: Apollo, private store$: Store<{game: GameState}>) {}

  @Effect()
  startNewGame$ = this.actions$.pipe(
    ofType(gameActions.startNewGame),
    mergeMap(() => {
      return this.store$.pipe(
        take(1),
        switchMap((state) => {
          return this.apollo.mutate({
            mutation: startNewGameMutation,
            variables: {
              userId: localStorage.getItem('user_id'),
            }
          });
        }),
        map((res: any) => {
          return gameActions.startNewGameSuccess({tracks: res.data.newGame.tracks, id: res.data.newGame.id});
        })
      )
    }));
}
