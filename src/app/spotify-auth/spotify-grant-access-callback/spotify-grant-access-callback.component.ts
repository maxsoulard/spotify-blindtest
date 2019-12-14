import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare let URLSearchParams: any;

@Component({
  selector: 'app-spotify-grant-access-callback',
  templateUrl: './spotify-grant-access-callback.component.html',
  styleUrls: ['./spotify-grant-access-callback.component.scss']
})
export class SpotifyGrantAccessCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      const urlFragment = new URLSearchParams(fragment);
      localStorage.setItem('access_token', urlFragment.get('access_token'));
      this.router.navigateByUrl('/play');
    });
  }

}
