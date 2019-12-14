import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { SpotifyGrantAccessCallbackComponent } from './spotify-grant-access-callback/spotify-grant-access-callback.component';
import { SpotifyAuthService } from './spotify-auth.service';



@NgModule({
  declarations: [SpotifyLoginComponent, SpotifyGrantAccessCallbackComponent],
  imports: [
    CommonModule
  ],
  providers: [
    SpotifyAuthService
  ],
  exports: [
    SpotifyLoginComponent,
    SpotifyGrantAccessCallbackComponent
  ]
})
export class SpotifyAuthModule { }
