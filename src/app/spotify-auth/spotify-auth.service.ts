import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyAuthService {
    constructor(private httpClient: HttpClient) {}

    login() {
      const scope = ['streaming', 'user-read-private', 'user-library-read'].join('%20');
      document.location.href =
          `${environment.spotifyBaseUrl}/authorize?client_id=${environment.clientId}&response_type=token&redirect_uri=${environment.spotifyRedirectUri}&scope=${scope}`;
    }

    granttSpotifyAccess() {

    }
}
