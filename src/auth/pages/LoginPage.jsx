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
        <div className='formas-container'></div>
        <h1>Bienvenido</h1>
        <h3 className='title'>Inicia sesión</h3>
        <div className='form_background'>
          <form onSubmit={onSubmit}>
            <div>
              <input
                type={'email'}
                className='form-control'
                placeholder='john.doe@mail.com'
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div>
              <input
                type={'password'}
                className='form-control'
                placeholder='password'
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </div>
            <br />
            <div>
              <button
                disabled={isAuthenticating}
                className='btn_auth'
                onClick={onGoogleSignIn}
              >
                Google
              </button>
              <button
                disabled={isAuthenticating}
                className='btn_auth'
                onClick={onFacebookSignIn}
              >
                Facebook
              </button>
            </div>
            <br />
            <div>
              <button
                disabled={isAuthenticating}
                type='sumit'
                className='btn login'
              >
                login
              </button>
            </div>
            <br />
          </form>
          <div>
            <a href='/register'> ¿Sin cuenta todavía? </a>
          </div>
        </div>
      </div>
    </>
  );
};
