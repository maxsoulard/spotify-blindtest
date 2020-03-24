import { createAction, props, Action } from '@ngrx/store';

export const guess = createAction('[Guess Component] Guess', props<{ userInput: string }>());

export class GuessAction implements Action {
  readonly type = '[Guess Component] Guess';
  constructor(public payload: string) {}
}

export type GuessActions = GuessAction;
