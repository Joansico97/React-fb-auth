import { singInWithGoogle } from '../../utils/providers';
import { chekingCredentials, login, logout } from '../context/authSlice';

export const chekingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const result = await singInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startFacebookSignIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};
