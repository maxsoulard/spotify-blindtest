import { SpotifyPlayerModule } from "../spotify-player.module";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsBrowseService {
  private constructor(private httpClient: HttpClient) {}

  getUserAlbums(): Observable<any> {
    return this.httpClient.get<any>('https://api.spotify.com/v1/me/albums');
  }

  getArtistTopTrack(id): Observable<any> {
    return this.httpClient.get<any>(`https://api.spotify.com/v1/artists/${id}/top-tracks`);
  }
}
