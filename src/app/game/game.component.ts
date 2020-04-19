import { Component, OnInit } from '@angular/core';
import { GameState } from './state/game.reducer';
import { Store } from '@ngrx/store';
import * as gameActions from './state/game.actions';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private store$: Store<{game: GameState}>) { }

  ngOnInit(): void {
    this.store$.dispatch(gameActions.startNewGame());
  }

}
