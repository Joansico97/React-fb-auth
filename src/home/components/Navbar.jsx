import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { AuthContext } from '../../auth/context/AuthContext';
import '../../styles.css';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <nav className='nav'>
      <Link to='/'>
        <img src={logo} alt='' />
      </Link>
      <ul>
        <li>
          <Link to='/'>
            <p>INICIO</p>
          </Link>
        </li>
        <li>
          <a href='/home#cuerpo'>BENEFICIOS</a>
        </li>
        <li>
          <Link to='posts'>
            <p>POSTS</p>
          </Link>
        </li>
        <li>
          <Link to='/login'>
            {user != null ? (
              <button className='btn_login' onClick={onLogout}>
                Logout
              </button>
            ) : (
              <button className='btn_login'>Login</button>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
