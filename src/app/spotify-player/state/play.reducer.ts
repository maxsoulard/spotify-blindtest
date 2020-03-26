import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { play, playSuccess } from './play.actions';
import * as fromRoot from '../../state/app.state';
import { SpotifyTrack } from '../model/spotify-track-informations.model';

export interface State extends fromRoot.State {
  player: PlayerState;
}

export interface PlayerState {
  playRandomSong: boolean;
  trackPlaying: SpotifyTrack;
}

const initialState: PlayerState = {
  playRandomSong: false,
  trackPlaying: undefined
};

const _playerReducer = createReducer(initialState,
  on(play,
    (state, action): PlayerState => {
      return {
        ...state,
        playRandomSong: !state.playRandomSong,
      };
    }),
    on(playSuccess,
      (state, action): PlayerState => {
        return {
          ...state,
          trackPlaying: action.trackPlaying
        }
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
export const getTrackPlaying = createSelector(
  getPlayerFeatureState,
  state => state.trackPlaying
);
