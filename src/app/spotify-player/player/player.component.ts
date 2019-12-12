import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SpotifyPlayerService } from '../spotify-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private spotifyPlayerService: SpotifyPlayerService) { }

  async ngOnInit() {
    (<any>window).onSpotifyWebPlaybackSDKReady = async () => {

      try {
        const {player, deviceId} = await this.spotifyPlayerService.getSpotifyInstance();
        console.log(`Device ${deviceId} connected`);

        const play = ({
          spotify_uri,
          playerInstance: {
            _options: {
              getOAuthToken,
              id
            }
          }
        }) => {
          getOAuthToken(access_token => {
            fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
              method: 'PUT',
              body: JSON.stringify({ uris: [spotify_uri] }),
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
              },
            });
          });
        };

        play({
          playerInstance: player,
          spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
        });

        } catch (error) {
          console.error(error);
        }
      };
    }

}
