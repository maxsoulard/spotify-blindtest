import { createAction, props } from '@ngrx/store';

export const guess = createAction('[Guess Component] Guess', props<{ userInput: string }>());
