import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { SpotifyPlayerService } from './spotify-player.service';
import { AlbumsBrowseComponent } from './albums-browse/albums-browse.component';



@NgModule({
  declarations: [PlayerComponent, AlbumsBrowseComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    SpotifyPlayerService
  ],
  exports: [
    PlayerComponent,
    AlbumsBrowseComponent
  ]
})
export class SpotifyPlayerModule { }
