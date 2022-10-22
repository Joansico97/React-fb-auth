import { useForm } from '../../hooks/useForm';

export const RegisterPage = () => {
  const { formState, onInputChange, name, email, password, onResetForm } =
    useForm({
      name: '',
      email: '',
      password: '',
    });

  return (
    <>
      <div className='login_container'>
        <h1>Registro</h1>
        <div className='form_background'>
          <form>
            <label className='label_form' htmlFor='name'>
              Name
            </label>
            <br />
            <input
              type={'name'}
              className='form-control'
              placeholder='Ingresa tu nombre'
              name='name'
              value={name}
              onChange={onInputChange}
            />
            <br />
            <label className='label_form' htmlFor='email'>
              Email
            </label>
            <br />
            <input
              type={'email'}
              className='form-control'
              placeholder='jhon.doe@mail.com'
              name='email'
              value={email}
              onChange={onInputChange}
            />
            <br />
            <label className='label_form' htmlFor='password'>
              Password
            </label>
            <br />
            <input
              type={'password'}
              className='form-control'
              placeholder='********'
              name='password'
              value={password}
              onChange={onInputChange}
            />
            <br />
            <ul className='auth_zone'>
              <li>
                <button className='btn_auth'>Google</button>
              </li>
              <li>
                <button className='btn_auth'>Facebook</button>
              </li>
            </ul>
          </form>
        </div>

        <button className='btn' onClick={onResetForm}>
          Register
        </button>
      </div>
    </>
  );
};
