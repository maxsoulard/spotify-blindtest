import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotifyTrack, SpotifyItem } from '../spotify-player/model/spotify-track-informations.model';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyBrowseService {
  constructor(private httpClient: HttpClient) {}

  getUserTopTracks(): Observable<any> {
    return this.httpClient.get<any>('	https://api.spotify.com/v1/me/top/tracks');
  }

  getUserSavedTracks(): Observable<SpotifyItem[]> {
    return this.httpClient.get<any>('https://api.spotify.com/v1/me/tracks')
      .pipe(
        map(response => {
          return response.items;
        })
      );
  }

  getUserAlbums(): Observable<any> {
    return this.httpClient.get<any>('https://api.spotify.com/v1/me/albums');
  }

  getArtistTopTrack(id): Observable<any> {
    return this.httpClient.get<any>(`https://api.spotify.com/v1/artists/${id}/top-tracks`);
  }

  getARandomSong(): Observable<SpotifyTrack> {
    return this.getUserSavedTracks().pipe(
      map((topTracks: any) => {
        const randomIndex = Math.floor(Math.random() * Math.floor(20));
        return topTracks.items[randomIndex];
      })
    );
  }
}
