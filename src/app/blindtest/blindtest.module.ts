import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessComponent } from './guess/guess.component';
import { ScoreComponent } from './score/score.component';
import { StoreModule } from '@ngrx/store';
import { guessReducer } from './state/guess.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GuessEffects } from './state/guess.effects';
import { BlindtestService } from './services/blindtest.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GuessComponent,
    ScoreComponent
  ],
  providers: [
    BlindtestService
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('blindtest', guessReducer),
    EffectsModule.forFeature(
      [ GuessEffects ]
    )
  ],
  exports: [
    GuessComponent,
    ScoreComponent
  ]
})
export class BlindtestModule { }
