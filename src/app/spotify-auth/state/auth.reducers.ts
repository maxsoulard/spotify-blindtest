import * as fromRoot from '../../state/app.state';
import { User } from 'src/app/spotify-player/model/user.model';
import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { userSignedIn, userSignedInFail } from './auth.actions';

export interface State extends fromRoot.State {
  auth: AuthState;
}

export interface AuthState {
  user: User;
  error: Error;
}

const initialState: AuthState = {
  user: undefined,
  error: undefined
};

const _authReducer = createReducer(initialState,
  on(userSignedIn,
    (state, action): AuthState => {
      return {
        ...state,
        user: action.user,
      };
    }
  ),
  on(userSignedInFail,
    (state, action): AuthState => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

export function authReducer(state: AuthState, action) {
  return _authReducer(state, action);
}

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getAuthError = createSelector(
  getAuthFeatureState,
  state => state.error
);
