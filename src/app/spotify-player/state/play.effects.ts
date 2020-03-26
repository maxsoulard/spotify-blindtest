import { Injectable } from "@angular/core";
import { SpotifyBrowseService } from 'src/app/spotify-api-services/spotify-browse.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as playActions from './play.actions';
import { mergeMap, map } from 'rxjs/operators';
import { SpotifyTrack } from '../model/spotify-track-informations.model';

@Injectable()
export class PlayEffects {
  constructor(private actions$: Actions, private spotifyBrowseService: SpotifyBrowseService) {}

  @Effect()
  getRandomSong$ = this.actions$.pipe(
    ofType(playActions.play),
    mergeMap((action: any) => this.spotifyBrowseService.getARandomSong().pipe(
        map((randomTrack: SpotifyTrack) => (playActions.playSuccess({trackPlaying: randomTrack})))
      )
    )
  )
}
