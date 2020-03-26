import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpotifyPlayerService } from '../spotify-player.service';
import { Store, select } from '@ngrx/store';
import { map, filter, switchMap, tap, mergeMap } from 'rxjs/operators';
import { SpotifyBrowseService } from 'src/app/spotify-api-services/spotify-browse.service';
import { play, playSuccess } from '../state/play.actions';
import { PlayerState, isPlayRandomSong, getTrackPlaying } from '../state/play.reducer';

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
      select(getTrackPlaying),
      tap(result => console.log(result))
    ).subscribe((randomTrack) => {
      if (randomTrack) {
        this.trackPlaying = randomTrack;
        this.spotifyPlayerService.play({
          playerInstance: this.spotifyInstance.player,
          spotify_uri: randomTrack.uri,
        });
      }
    });
  }

  playSong() {
    this.store.dispatch(play());
  }
}
