import { createAction, props } from '@ngrx/store';
import { SpotifyTrack } from '../model/spotify-track-informations.model';

export const play = createAction('[Player Component] Play');
export const setTrackPlaying = createAction('[Player Component] SetTrackPlaying', props<{trackPlaying: SpotifyTrack}>());
