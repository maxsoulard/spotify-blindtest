import { createAction, props } from '@ngrx/store';
import { SpotifyTrack } from '../model/spotify-track-informations.model';

export const play = createAction('[Player Component] Play');
export const playSuccess = createAction('[Player Component] Play success', props<{trackPlaying: SpotifyTrack}>());
export const playFail = createAction('[Player Component] Play fail');
