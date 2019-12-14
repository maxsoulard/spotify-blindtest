import { createReducer, on } from '@ngrx/store';
import { play } from '../actions/play.actions';

export const initialState = false;

const _playerReducer = createReducer(initialState,
  on(play, state => !state),
);

export function playerReducer(state, action) {
  return _playerReducer(state, action);
}
