import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpotifyPlayerService } from '../spotify-player.service';
import { Store, select } from '@ngrx/store';
import { play, getUserSavedTracks } from '../state/play.actions';
import { getTrackPlaying } from '../state/play.reducer';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: []
})
export class PlayerComponent implements OnInit {

  private spotifyInstance: any;
  displayPlayer: boolean = false;
  trackPlaying: any;

  constructor(private store: Store<any>,
    private spotifyPlayerService: SpotifyPlayerService,
    private changeDetector: ChangeDetectorRef) {
    }

  ngOnInit() {
    (<any>window).onSpotifyWebPlaybackSDKReady = () => {
      console.log('spotify web playback sdk is ready');
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

    this.store.pipe(
      select(getTrackPlaying),
    ).subscribe((randomTrack) => {
      this.nextTrack(randomTrack);
    });

    this.store.dispatch(getUserSavedTracks());
  }

  private nextTrack(track){
    if (track) {
      this.trackPlaying = track;
      this.spotifyPlayerService.play({
        playerInstance: this.spotifyInstance.player,
        spotify_uri: track.uri,
      });
    }
  }

  playSong() {
    this.store.dispatch(play());
  }
}
