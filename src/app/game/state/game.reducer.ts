import * as fromRoot from '../../state/app.state';
import { SpotifyTrack } from 'src/app/spotify-player/model/spotify-track-informations.model';
import { createReducer, on } from '@ngrx/store';
import { startNewGameSuccess, filterATrack } from './game.actions';

export interface State extends fromRoot.State {
  game: GameState;
}

export interface GameState {
  gameId: String;
  tracks: SpotifyTrack[];
}

const initialState: GameState = {
  gameId: undefined,
  tracks: []
};

const _gameReducer = createReducer(initialState,
  on(startNewGameSuccess,
    (state, action): GameState => {
      return {
        ...state,
        tracks: action.tracks,
        gameId: action.id,
      };
    }
  ),
  on(filterATrack,
    (state, action): GameState => {
      return {
        ...state,
        tracks: filterPlayingTrack(action.trackToFilter, state.tracks),
      }
    })
);

export function gameReducer(state: GameState, action) {
  return _gameReducer(state, action);
}

function filterPlayingTrack(playingTrack: SpotifyTrack, tracks: SpotifyTrack[]) {
  let playableTracks;
  if (playingTrack && playingTrack.id) {
    playableTracks = tracks.filter(t => t.id !== playingTrack.id);
  }
  return playableTracks || tracks;
}
