import { Injectable } from "@angular/core";
import { SpotifyBrowseService } from 'src/app/spotify-api-services/spotify-browse.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as playActions from './play.actions';
import { mergeMap, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PlayerState } from './play.reducer';
import * as guessActions from '../../blindtest/state/guess.actions';

@Injectable()
export class PlayEffects {
  constructor(private actions$: Actions, private store$: Store<{player: PlayerState}>, private spotifyBrowseService: SpotifyBrowseService) {}

  @Effect()
  getRandomSong$ = this.actions$.pipe(
    ofType(playActions.play),
    mergeMap(() => {
      return this.store$.pipe(
        take(1),
        map((state) => {
          const randomIndex = Math.floor(Math.random() * Math.floor(state.player.tracks.length));
          if (state.player.tracks.length === 0) return guessActions.endGame();
          return playActions.getRandomTrackSuccess({trackPlaying: state.player.tracks[randomIndex]});
        }),
      )
    }));

  @Effect()
  getUserSavedTracks$ = this.actions$.pipe(
    ofType(playActions.getUserSavedTracks),
    mergeMap(() => this.spotifyBrowseService.getUserSavedTracks().pipe(
      map(tracks => playActions.getUserSavedTracksSuccess({tracks}))
    ))
  )
}
