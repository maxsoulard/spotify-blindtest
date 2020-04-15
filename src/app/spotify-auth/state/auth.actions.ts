import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/spotify-player/model/user.model';

export const userSignedIn = createAction('[Auth Component] UserSignedIn', props<{user: User}>());
