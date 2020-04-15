import { createAction, props, Action } from '@ngrx/store';

export const guess = createAction('[Guess Component] Guess', props<{ userInput: string }>());
export const guessSuccess = createAction('[Guess Component] Guess success', props<{ score: number }>());
export const guessFail = createAction('[Guess Component] Guess fail');
export const endGame = createAction('[Guess Component] end game');
export const submitFinalScoreSuccess = createAction('[Guess Component] submit final score success');
export const submitFinalScoreFail  = createAction('[Guess Component] submit final score fail', props<Error>());
