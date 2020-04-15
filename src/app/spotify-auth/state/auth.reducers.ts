import * as fromRoot from '../../state/app.state';
import { User } from 'src/app/spotify-player/model/user.model';
import { createReducer, on } from '@ngrx/store';
import { userSignedIn } from './auth.actions';

export interface State extends fromRoot.State {
  auth: AuthState;
}

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: undefined,
};

const _authReducer = createReducer(initialState,
  on(userSignedIn,
    (state, action): AuthState => {
      return {
        ...state,
        user: action.user,
      };
    }
  )
);

export function authReducer(state: AuthState, action) {
  return _authReducer(state, action);
}
