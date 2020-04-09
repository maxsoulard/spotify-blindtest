import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyBrowseService } from 'src/app/spotify-api-services/spotify-browse.service';
import { map } from 'rxjs/operators';
declare let URLSearchParams: any;

@Component({
  selector: 'app-spotify-grant-access-callback',
  templateUrl: './spotify-grant-access-callback.component.html',
  styleUrls: ['./spotify-grant-access-callback.component.scss']
})
export class SpotifyGrantAccessCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private spotifyBrowseService: SpotifyBrowseService) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      const urlFragment = new URLSearchParams(fragment);
      localStorage.setItem('access_token', urlFragment.get('access_token'));

      this.spotifyBrowseService.getSpotifyProfile().pipe(
        map(userProfile => {
          // TODO graphql create or update
          console.log(userProfile);
        })
      ).subscribe(() => this.router.navigateByUrl('/play'))
    });
  }
}
