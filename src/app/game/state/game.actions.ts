import { createAction, props } from "@ngrx/store";
import { SpotifyTrack } from 'src/app/spotify-player/model/spotify-track-informations.model';

export const startNewGame = createAction('[Game] StartNewGame');
export const startNewGameSuccess = createAction('[Game] StartNewGameSuccess', props<{tracks: SpotifyTrack[], id: String}>());
export const filterATrack = createAction('[Game] FilterATrack', props<{trackToFilter: SpotifyTrack}>());
