import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyBrowseService } from 'src/app/spotify-api-services/spotify-browse.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Apollo, Query } from 'apollo-angular';
declare let URLSearchParams: any;
import gql from 'graphql-tag';
import { Store } from '@ngrx/store';
import { PlayerState } from 'src/app/spotify-player/state/play.reducer';
import * as authActions from '../state/auth.actions';

const createUser = gql`
  mutation($displayName: String!) {
    user: createUser(name: $displayName) {
      id
      score
      name
      gamesHistory {
        date
        score
      }
    }
  }`;

@Component({
  selector: 'app-spotify-grant-access-callback',
  templateUrl: './spotify-grant-access-callback.component.html',
  styleUrls: ['./spotify-grant-access-callback.component.scss']
})
export class SpotifyGrantAccessCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private store$: Store<{player: PlayerState}>,
    private router: Router,
    private spotifyBrowseService: SpotifyBrowseService,
    private apollo: Apollo) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      const urlFragment = new URLSearchParams(fragment);
      localStorage.setItem('access_token', urlFragment.get('access_token'));
      this.router.navigateByUrl('/play');

      this.spotifyBrowseService.getSpotifyProfile().pipe(
        switchMap(userProfile => {
          return this.apollo.mutate({
          mutation: createUser,
          variables: {
            displayName: userProfile.display_name
          }
        })
      }),
        tap(({data}: any) => {
          this.store$.dispatch(authActions.userSignedIn({user: data.user}))
        })
      ).subscribe(() => {});
    });
  }
}
