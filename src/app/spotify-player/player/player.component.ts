import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpotifyPlayerService } from '../spotify-player.service';
import { Store, select } from '@ngrx/store';
import { map, filter, switchMap, tap } from 'rxjs/operators';
import { SpotifyBrowseService } from 'src/app/spotify-api-services/spotify-browse.service';
import { play, setTrackPlaying } from '../state/play.actions';
import { PlayerState, isPlayRandomSong } from '../state/play.reducer';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [SpotifyPlayerService, SpotifyBrowseService]
})
export class PlayerComponent implements OnInit {

  private spotifyInstance: any;
  displayPlayer: boolean = false;
  trackPlaying: any;

  constructor(private store: Store<any>,
    private spotifyPlayerService: SpotifyPlayerService,
    private spotifyBrowseService: SpotifyBrowseService,
    private changeDetector: ChangeDetectorRef) {
      // Init spotify SDK
      (<any>window).onSpotifyWebPlaybackSDKReady = () => {
        try {
          this.spotifyPlayerService.getSpotifyInstance(({player, deviceId}) => {
            this.spotifyInstance = {player, deviceId};
            this.displayPlayer = true;
            this.changeDetector.detectChanges();
          });
        } catch (error) {
          console.error(error);
        }
      };
  }

  ngOnInit() {
    this.store.pipe(
      select(isPlayRandomSong),
      filter((playRandomSong: boolean) => !!playRandomSong),
      switchMap(() => {
        return this.spotifyBrowseService.getUserTopTracks();
      }),
      map((topTracks: any) => {
        const randomIndex = Math.floor(Math.random() * Math.floor(20));
        return topTracks.items[randomIndex];
      })
    ).subscribe((randomTrack) => {
      this.trackPlaying = randomTrack;
      this.store.dispatch(setTrackPlaying({trackPlaying: randomTrack}))
      this.spotifyPlayerService.play({
        playerInstance: this.spotifyInstance.player,
        spotify_uri: randomTrack.uri,
      });
    });

    this.store.pipe(
      select(isPlayRandomSong),
      filter((playRandomSong: boolean) => !playRandomSong),
      tap(() => {
        if (this.spotifyInstance && this.spotifyInstance.player) {
          this.spotifyInstance.player.pause();
        }
      })).subscribe();
  }

  playSong() {
    this.store.dispatch(play());
  }
}
