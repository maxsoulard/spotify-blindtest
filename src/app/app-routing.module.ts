import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyGrantAccessCallbackComponent } from './spotify-auth/spotify-grant-access-callback/spotify-grant-access-callback.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: 'play', component: GameComponent
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
