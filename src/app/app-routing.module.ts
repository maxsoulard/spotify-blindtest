import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyGrantAccessCallbackComponent } from './spotify-auth/spotify-grant-access-callback/spotify-grant-access-callback.component';
import { GameComponent } from './game/game.component';
import { AuthGuardService } from './auth-guard.service';
import { SpotifyLoginComponent } from './spotify-auth/spotify-login/spotify-login.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'login', component: SpotifyLoginComponent
      },
      {
        path: '', component: GameComponent, canActivate: [ AuthGuardService ]
      },
    ]
  },
  {
    path: 'spotify-access', component: SpotifyGrantAccessCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
