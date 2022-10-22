import { useContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { AuthContext } from '../context/AuthContext';
import {
  chekingAuthentication,
  startFacebookSignIn,
  startGoogleSignIn,
} from '../helpers/thunks';

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isAuthenticating = useMemo(() => status === 'cheking', [status]);

  const { formState, onInputChange, email, password } = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    login('Jorge Silva');
    navigate('/', {
      replace: true,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(chekingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  };
  const onFacebookSignIn = () => {
    console.log('onFacebookSignIn');
    dispatch(startFacebookSignIn());
  };

  return (
    <>
      <div className='login_container'>
        <h1>Bienvenido</h1>
        <div className='form_background'>
          <form onSubmit={onSubmit}>
            <input
              type={'email'}
              className='form-control'
              placeholder='john.doe@mail.com'
              name='email'
              value={email}
              onChange={onInputChange}
            />
            <br />
            <input
              type={'password'}
              className='form-control'
              placeholder='password'
              name='password'
              value={password}
              onChange={onInputChange}
            />
            <br />
            <a href='/register'> ¿Sin cuenta todavía? </a>
            <br />
            <ul className='auth_zone'>
              <li>
                <button
                  disabled={isAuthenticating}
                  className='btn_auth'
                  onClick={onGoogleSignIn}
                >
                  Google
                </button>
              </li>
              <li>
                <button
                  disabled={isAuthenticating}
                  className='btn_auth'
                  onClick={onFacebookSignIn}
                >
                  Facebook
                </button>
              </li>
            </ul>
            <button
              disabled={isAuthenticating}
              type='sumit'
              className='btn login'
            >
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
