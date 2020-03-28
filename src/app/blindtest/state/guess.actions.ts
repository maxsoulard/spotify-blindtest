import { createAction, props, Action } from '@ngrx/store';

export const guess = createAction('[Guess Component] Guess', props<{ userInput: string }>());
export const guessSuccess = createAction('[Guess Component] Guess success', props<{ score: number }>());
export const guessFail = createAction('[Guess Component] Guess fail');
