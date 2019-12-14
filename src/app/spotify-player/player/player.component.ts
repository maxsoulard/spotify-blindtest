import { Component, OnInit } from '@angular/core';
import { SpotifyPlayerService } from '../spotify-player.service';
import { Store, select } from '@ngrx/store';
import { play } from 'src/app/actions/play.actions';
import { tap, filter, flatMap, map, skip } from 'rxjs/operators';
import { SpotifyBrowseService } from 'src/app/spotify-browse/spotify-browse.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [SpotifyPlayerService, SpotifyBrowseService]
})
export class PlayerComponent implements OnInit {

  private spotifyInstance: any;

  constructor(private store: Store<{ play: boolean }>, private spotifyPlayerService: SpotifyPlayerService, private spotifyBrowseService: SpotifyBrowseService) {
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
      skip(1),
      flatMap(() => {
        return this.spotifyBrowseService.getUserTopTracks();
      }),
      map((topTracks: any) => {
        const randomIndex = Math.floor(Math.random() * Math.floor(20));
        return topTracks.items[randomIndex];
      })
    ).subscribe((randomTrack) => {
      this.spotifyPlayerService.play({
        playerInstance: this.spotifyInstance.player,
        spotify_uri: randomTrack.uri,
      });
    });
  }

  playSong() {
    this.store.dispatch(play());
  }

}
