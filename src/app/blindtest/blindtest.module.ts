import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessComponent } from './guess/guess.component';
import { ScoreComponent } from './score/score.component';
import { StoreModule } from '@ngrx/store';
import { guessReducer } from './state/guess.reducer';



@NgModule({
  declarations: [
    GuessComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('blindtest', guessReducer),
  ],
  exports: [
    GuessComponent
  ]
})
export class BlindtestModule { }
