import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
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


export function playerReducer(state: PlayerState, action) {
  return _playerReducer(state, action);
}

const getPlayerFeatureState = createFeatureSelector<PlayerState>('player');
export const isPlayRandomSong = createSelector(
  getPlayerFeatureState,
  state => state.playRandomSong
);
