import { createReducer, on } from '@ngrx/store';
import { play } from './play.actions';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
  player: PlayerState;
}

export interface PlayerState {
  playRandomSong: boolean;
}

const initialState: PlayerState = {
  playRandomSong: false
};

const _playerReducer = createReducer(initialState,
  on(play,
    (state, action): PlayerState => {
      return {
        ...state,
        playRandomSong: !state.playRandomSong,
      };
    })
  );


export function playerReducer(state, action) {
  return _playerReducer(state, action);
}
