import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as playActions from './play.actions';
import { mergeMap, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PlayerState } from './play.reducer';
import * as guessActions from '../../blindtest/state/guess.actions';
import * as gameActions from '../../game/state/game.actions';
import { GameState } from 'src/app/game/state/game.reducer';

@Injectable()
export class PlayEffects {
  constructor(private actions$: Actions, private store$: Store<{game: GameState, player: PlayerState}>) {}

  @Effect()
  getRandomSong$ = this.actions$.pipe(
    ofType(playActions.play),
    mergeMap(() => {
      return this.store$.pipe(
        take(1),
        map((state) => {
          const randomIndex = Math.floor(Math.random() * Math.floor(state.game.tracks.length));
          if (state.game.tracks.length === 0) return guessActions.endGame();
          return playActions.playTrack({trackPlaying: state.game.tracks[randomIndex]});
        }),
      )
    }));

  @Effect()
  filterPlayingSong$ = this.actions$.pipe(
    ofType(playActions.playTrack),
    mergeMap(() => {
      return this.store$.pipe(
        take(1),
        map((state) => {
          return gameActions.filterATrack({trackToFilter: state.player.trackPlaying});
        })
      )
    }));
}
