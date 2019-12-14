import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SpotifyAuthService } from '../spotify-auth.service';

@Component({
  selector: 'app-spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.scss']
})
export class SpotifyLoginComponent implements OnInit {

  constructor(private spotifyAuthService: SpotifyAuthService) { }

  ngOnInit() {
  }

  login() {
    this.spotifyAuthService.login();
  }

}
