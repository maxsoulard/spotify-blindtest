import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { SpotifyTrack, SpotifyItem } from '../spotify-player/model/spotify-track-informations.model';
import { map, switchMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class SpotifyBrowseService {
  constructor(private httpClient: HttpClient) {}

  getSpotifyProfile() {
    return this.httpClient.get<any>('https://api.spotify.com/v1/me');
  }

  getUserSavedTracks(): Observable<SpotifyTrack[]> {
    return this.httpClient.get<any>('https://api.spotify.com/v1/me/albums?limit=1')
      .pipe(
        map(response => {
          return {total: response.total};
        }),
        switchMap(data => {
          const firstOffset = Math.floor(Math.random() * Math.floor(data.total));
          const secondOffset = Math.floor(Math.random() * Math.floor(data.total));
          return forkJoin(
              this.httpClient.get<any>(`https://api.spotify.com/v1/me/albums?limit=20&offset=${firstOffset}`),
              this.httpClient.get<any>(`https://api.spotify.com/v1/me/albums?limit=20&offset=${secondOffset}`),
            );
        }),
        map(([firstArrayOfItems, secondArrayOfItems]) => {
          const items = [..._.sampleSize(firstArrayOfItems.items, 5), ..._.sampleSize(secondArrayOfItems.items, 5)];
          const tracks = items.map(item => _.sample(item.album.tracks.items));
          return tracks;
        })
      )
  }
}
