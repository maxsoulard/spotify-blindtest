import { createAction, props } from '@ngrx/store';
import { SpotifyTrack } from '../model/spotify-track-informations.model';

export const play = createAction('[Player Component] Play');
export const playTrack = createAction('[Player Component] PlayTrack', props<{trackPlaying: SpotifyTrack}>());
export const playFail = createAction('[Player Component] Play fail');
