import { Component, OnInit } from '@angular/core';
import { SpotifyPlayerService } from '../spotify-player.service';
import { Store, select } from '@ngrx/store';
import { play } from 'src/app/actions/play.actions';
import { tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private spotifyInstance: any;

  constructor(private store: Store<{ play: boolean }>, private spotifyPlayerService: SpotifyPlayerService) {
    // Init spotify SDK
    (<any>window).onSpotifyWebPlaybackSDKReady = () => {
      try {
        this.spotifyPlayerService.getSpotifyInstance(({player, deviceId}) => {
          this.spotifyInstance = {player, deviceId};
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  async ngOnInit() {
    this.store.pipe(
      select('play'),
      filter((state) => !!state),
    ).subscribe(() => {
      this.spotifyPlayerService.play({
        playerInstance: this.spotifyInstance.player,
        spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
      });
    });
  }

  playSong() {
    this.store.dispatch(play());
  }

}
