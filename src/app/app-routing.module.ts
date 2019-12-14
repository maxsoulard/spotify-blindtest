import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyGrantAccessCallbackComponent } from './spotify-auth/spotify-grant-access-callback/spotify-grant-access-callback.component';
import { PlayerComponent } from './spotify-player/player/player.component';


const routes: Routes = [
  {
    path: 'play', component: PlayerComponent
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
