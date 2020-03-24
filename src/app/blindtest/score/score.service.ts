import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { getTrackPlaying } from 'src/app/spotify-player/state/play.reducer';
import { tap, switchMap, filter } from 'rxjs/operators';
import { SpotifyTrack } from 'src/app/spotify-player/model/spotify-track-informations.model';

@Injectable()
export class ScoreService {

  constructor() { }

  guess(userInput, store) {
    return store.select(getTrackPlaying).pipe(
      filter(track => !!track),
      tap(track => console.log(track)),
      switchMap((track: SpotifyTrack) => {
        if (userInput.localeCompare(track.name)) {
          return of({
            score: 10
          })
        } else if (userInput.localeCompare(track.artists[0])) {
          return of({
            score: 2
          })
        }
      })
    );
  }
}
