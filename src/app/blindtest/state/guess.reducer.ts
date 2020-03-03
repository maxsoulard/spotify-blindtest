import { createReducer, on } from '@ngrx/store';
import { guess } from './guess.actions';

const initialState: BlindtestState = {
  userInput: ''
};

const _guessReducer = createReducer(initialState,
  on(guess,
    (state, action) => {
      return {
        ...state,
        userInput: action.userInput
      };
    }),
);

export function guessReducer(state, action) {
  return _guessReducer(state, action);
}

export interface BlindtestState {
  userInput: string;
}
