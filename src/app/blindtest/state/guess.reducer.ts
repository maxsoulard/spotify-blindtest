import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { guess, guessSuccess, endGame } from './guess.actions';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
  blindtest: BlindtestState;
}

export interface BlindtestState {
  userInput: string;
  score: number;
  finalScore: number;
}

const initialState: BlindtestState = {
  userInput: '',
  score: 0,
  finalScore: undefined
};

const _guessReducer = createReducer(initialState,
  on(guess,
    (state, action): BlindtestState => {
      return {
        ...state,
        userInput: action.userInput
      };
    }),
  on(guessSuccess,
    (state, action): BlindtestState => {
      return {
        ...state,
        score: state.score + action.score,
        userInput: ''
      };
    }),
  on(endGame,
    (state): BlindtestState => {
      return {
        ...state,
        finalScore: state.score
      }
    })
);

export function guessReducer(state: BlindtestState, action) {
  return _guessReducer(state, action);
}

const getGuesserFeatureState = createFeatureSelector<BlindtestState>('blindtest');
export const getGuessUserInput = createSelector(
  getGuesserFeatureState,
  state => state.userInput
);
export const getPlayerScore = createSelector(
  getGuesserFeatureState,
  state => state.score
);
export const getFinalScore = createSelector(
  getGuesserFeatureState,
  state => state.finalScore
)
