import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { SpotifyPlayerService } from './spotify-player.service';



@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule
  ],
  providers: [
    SpotifyPlayerService
  ],
  exports: [
    PlayerComponent
  ]
})
export class SpotifyPlayerModule { }
