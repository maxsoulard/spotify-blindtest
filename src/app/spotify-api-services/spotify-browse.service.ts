import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SpotifyBrowseService {
  constructor(private httpClient: HttpClient) {}

  getUserTopTracks(): Observable<any> {
    return this.httpClient.get<any>('	https://api.spotify.com/v1/me/top/tracks');
  }

  getUserAlbums(): Observable<any> {
    return this.httpClient.get<any>('https://api.spotify.com/v1/me/albums');
  }

  getArtistTopTrack(id): Observable<any> {
    return this.httpClient.get<any>(`https://api.spotify.com/v1/artists/${id}/top-tracks`);
  }
}
