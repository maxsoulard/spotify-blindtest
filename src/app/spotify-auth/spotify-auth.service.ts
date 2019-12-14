import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class SpotifyAuthService {
    constructor() {}
    
    login() {
        const scope = ['streaming', 'user-read-private', 'user-top-read', 'user-library-read'].join('%20');
        document.location.href = 
            `${environment.spotifyBaseUrl}/authorize?client_id=${environment.clientId}&response_type=token&redirect_uri=${environment.spotifyRedirectUri}&scope=${scope}`;
    }

    granttSpotifyAccess() {

    }
}