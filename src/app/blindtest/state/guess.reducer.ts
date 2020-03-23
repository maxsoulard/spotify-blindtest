import { createReducer, on } from '@ngrx/store';
import { guess } from './guess.actions';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
  blindtest: BlindtestState;
}

export interface BlindtestState {
  userInput: string;
}

const initialState: BlindtestState = {
  userInput: ''
};

const _guessReducer = createReducer(initialState,
  on(guess,
    (state, action): BlindtestState => {
      return {
        ...state,
        userInput: action.userInput
      };
    }),
);

export function guessReducer(state: BlindtestState, action) {
  return _guessReducer(state, action);
}
