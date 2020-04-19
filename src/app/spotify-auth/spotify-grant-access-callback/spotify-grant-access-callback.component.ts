import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyBrowseService } from 'src/app/spotify-api-services/spotify-browse.service';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
declare let URLSearchParams: any;
import gql from 'graphql-tag';
import { of } from 'rxjs';

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
    private spotifyBrowseService: SpotifyBrowseService,
    private apollo: Apollo) { }

  ngOnInit() {
    this.route.fragment.pipe(
      tap((fragment) => {
        const urlFragment = new URLSearchParams(fragment);
        localStorage.setItem('access_token', urlFragment.get('access_token'));
      }),
      switchMap(() => {
        return this.spotifyBrowseService.getSpotifyProfile();
      }),
      switchMap(userProfile => {
        return this.apollo.mutate({
          mutation: createUser,
          variables: {
            displayName: userProfile.display_name
          }
        });
      }),
      tap(({data}: any) => {
        localStorage.setItem('user_id', data.user.id);
        // this.store$.dispatch(authActions.userSignedIn({user: data.user}));
      }),
      catchError(error => {
        console.error(error);
        // this.store$.dispatch(authActions.userSignedInFail({error}));
        return of(error);
      }),
      ).subscribe(() => {
        document.location.href = document.location.origin + '/';
      });
  }
}
