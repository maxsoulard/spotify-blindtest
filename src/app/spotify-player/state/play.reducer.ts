import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { play, getRandomTrackSuccess, getUserSavedTracksSuccess } from './play.actions';
import * as fromRoot from '../../state/app.state';
import { SpotifyTrack } from '../model/spotify-track-informations.model';

export interface State extends fromRoot.State {
  player: PlayerState;
}

export interface PlayerState {
  playRandomSong: boolean;
  trackPlaying: SpotifyTrack;
  tracks: SpotifyTrack[];
}

const initialState: PlayerState = {
  playRandomSong: false,
  trackPlaying: undefined,
  tracks: []
};

const _playerReducer = createReducer(initialState,
  on(play,
    (state, action): PlayerState => {
      return {
        ...state,
        playRandomSong: !state.playRandomSong,
      };
    }
  ),
  on(play,
    (state, action): PlayerState => {
      return {
        ...state,
        playRandomSong: !state.playRandomSong,
        tracks: filterPlayingTrack(state.trackPlaying, state.tracks),
      };
    }
  ),
  on(getUserSavedTracksSuccess,
    (state, action): PlayerState => {
      return {
        ...state,
        tracks: action.tracks,
      };
    }
  ),
  on(getRandomTrackSuccess,
    (state, action): PlayerState => {
      return {
        ...state,
        trackPlaying: action.trackPlaying,
      }
    }
  ),
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

function filterPlayingTrack(playingTrack, tracks) {
  let playableTracks;
  if (playingTrack && playingTrack.id) {
    playableTracks = tracks.filter(t => t.id !== playingTrack.id);
  }
  return playableTracks || tracks;
}
