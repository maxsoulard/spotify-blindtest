import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyBrowseService } from 'src/app/spotify-api-services/spotify-browse.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Apollo, Query } from 'apollo-angular';
declare let URLSearchParams: any;
import gql from 'graphql-tag';

const createUser = gql`
    mutation($displayName: String!) {
      user: createUser(name: $displayName) {
        id
        score
        name
      }
    }`;

@Component({
  selector: 'app-spotify-grant-access-callback',
  templateUrl: './spotify-grant-access-callback.component.html',
  styleUrls: ['./spotify-grant-access-callback.component.scss']
})
export class SpotifyGrantAccessCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private spotifyBrowseService: SpotifyBrowseService, private apollo: Apollo) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      const urlFragment = new URLSearchParams(fragment);
      localStorage.setItem('access_token', urlFragment.get('access_token'));
    });

    //this.spotifyBrowseService.getSpotifyProfile().pipe(
      //switchMap(userProfile => {
    /* this.apollo.mutate({
        mutation: createUser,
        variables: {
          displayName: 'maxtest2'
        } */
        this.apollo.watchQuery({
            query: gql`
              query {
                GenreCollection
              }
            `
          }).valueChanges.pipe(tap(data => console.log(data))).subscribe((result: any) => {
            console.log(result.data);
            console.error(result.error);
          });

          /* .subscribe(({ data }) => {
            console.log('got data', data);
          },(error) => {
            console.log('there was an error sending the query', error);
          }); */
    // .subscribe(() => this.router.navigateByUrl('/play'))
  }
}
