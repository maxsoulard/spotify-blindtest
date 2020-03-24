import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { StoreModule } from '@ngrx/store';
import { BlindtestModule } from '../blindtest/blindtest.module';
import { playerReducer } from './state/play.reducer';

@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('player', playerReducer),
  ],
  providers: [
  ],
  exports: [
    PlayerComponent,
  ]
})
export class SpotifyPlayerModule { }
