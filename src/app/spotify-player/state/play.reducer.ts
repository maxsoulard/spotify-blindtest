import { createReducer, on } from '@ngrx/store';
import { play } from './play.actions';


const initialState: PlayerState = {
  playRandomSong: false
};

const _playerReducer = createReducer(initialState,
  on(play,
    (state, action) => {
      return {
        ...state,
        playRandomSong: !state.playRandomSong
      };
    })
  );


export function playerReducer(state, action) {
  return _playerReducer(state, action);
}

export interface PlayerState {
  playRandomSong: boolean;
}
