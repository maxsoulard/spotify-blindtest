import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
declare let Spotify: any;

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlayerService {

  constructor() { }

  getSpotifyInstance(cb) {
    // return new Promise((resolve, reject) => {
      const token = environment.spotifyPlayerKey;
      const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
      });

      // Error handling
      player.addListener('initialization_error', ({ message }) => { throw new Error(message); });
      player.addListener('authentication_error', ({ message }) => { throw new Error(message); });
      player.addListener('account_error', ({ message }) => { throw new Error(message); });
      player.addListener('playback_error', ({ message }) => { throw new Error(message); });

      // Playback status updates
      player.addListener('player_state_changed', state => { console.log(state); });

      // Not Ready
      player.addListener('not_ready', ({ deviceId }) => {
        throw new Error(`Device ID ${deviceId} has gone offline`);
      });

      player.connect();

      player.addListener('ready', ({ deviceId }) => {
        cb({player, deviceId});
      });
    // });
  }

  play({ spotify_uri, playerInstance: { _options: { getOAuthToken, id }}}) {
    getOAuthToken(accessToken => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: 'PUT',
        body: JSON.stringify({ uris: [spotify_uri] }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
    });
  }
}
