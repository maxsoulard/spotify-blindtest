import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { GuessComponent } from './guess/guess.component';
import { StoreModule } from '@ngrx/store';
import { playerReducer } from '../reducers/play.reducer';

@NgModule({
  declarations: [
    PlayerComponent,
    GuessComponent
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
