import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';



@NgModule({
  declarations: [SpotifyLoginComponent],
  imports: [
    CommonModule
  ]
})
export class SpotifyAuthModule { }
