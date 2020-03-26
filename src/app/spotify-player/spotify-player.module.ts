import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { StoreModule } from '@ngrx/store';
import { playerReducer } from './state/play.reducer';
import { PlayEffects } from './state/play.effects';
import { EffectsModule } from '@ngrx/effects';
import { SpotifyBrowseService } from '../spotify-api-services/spotify-browse.service';

@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('player', playerReducer),
    EffectsModule.forFeature(
      [ PlayEffects ]
    ),
  ],
  providers: [
    SpotifyBrowseService,
  ],
  exports: [
    PlayerComponent,
  ]
})
export class SpotifyPlayerModule { }
