import { createAction, props } from '@ngrx/store';
import { SpotifyTrack } from '../model/spotify-track-informations.model';

export const play = createAction('[Player Component] Play');
export const getUserSavedTracks = createAction('[Player Component] GetUserSavedTracks');
export const getUserSavedTracksSuccess = createAction('[Player Component] GetUserSavedTracks success', props<{tracks: SpotifyTrack[]}>());
export const getRandomTrackSuccess = createAction('[Player Component] GetRandomTrack success', props<{trackPlaying: SpotifyTrack}>());
export const playFail = createAction('[Player Component] Play fail');
