import axios from 'axios';
import * as qs from 'querystring';

/**
 * Handle Spotify API authentication by using an access token which is not bound to a user to fetch data.
 * TODO: use a user token to fetch spotify data under /me route
 */
export class SpotifyApi {
  private static accessData;
  static axios;
  static async init() {
    const authOptions = {
      headers: {
          'Authorization': `Basic ${process.env.SPOTIFY_BASIC_TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    const now = Date.now();
    const result = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({grant_type: 'client_credentials'}), authOptions);
    SpotifyApi.accessData = {...result};
    SpotifyApi.axios = axios.create({
      baseURL: 'https://api.spotify.com/v1/',
      timeout: 1000,
      headers: {'Authorization': `Bearer ${result.data.access_token}`}
    });
    SpotifyApi.accessData.expiresAtMs = now + result.data.expires_in * 1000;
  }

  static async refresh() {
    if (!SpotifyApi.accessData || Date.now() >= (SpotifyApi.accessData.expiresAtMs - 10000)) {
      await SpotifyApi.init();
      console.debug('Spotify access token has been refreshed');
    }
    return SpotifyApi.accessData;
  }

  static async get(url, headers, logger) {
    try {
        const config = { headers };
        const result = url.includes('/me') ? await SpotifyApi.axios.get(url, config) : await SpotifyApi.axios.get(url);
        return result;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}
