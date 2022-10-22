import { Navbar } from '../components/Navbar';

import image from '../../assets/image.png';
import homeImage from '../../assets/home_image.png';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';

import clockImage from '../../assets/clock_item.svg';
import officeImage from '../../assets/office_item.svg';
import workshopkImage from '../../assets/workshop_item.svg';
import snackImage from '../../assets/snack_item.svg';

export const HomePage = () => {
  const abrirLink = () => {
    window.open('https://wacoservices.com/', '_blank');
  };

  return (
    <>
      <div className='container'>
        <span className='titulo1'>Bienvenido a tu</span>
        <br></br>
        <br></br>
        <span className='titulo2'>
          Entrevista Técnica <small className='titulo1'>en</small>
        </span>
        <div style={{ height: '20px' }}></div>
        <img src={image} alt='' />
      </div>
      <div className='rectangle_div'>
        <ul className='banner'>
          <li>
            <img src={homeImage} height='376px' width='446px' alt='' />
          </li>
          <li>
            <div className='parrafo'>
              <span className='titulo3'>Trabajamos para </span>
              <br></br>
              <span className='titulo4'>
                Convertir ideas <small className='titulo3'>en </small>
              </span>
              <br></br>
              <span className='titulo3'>productos.</span>
            </div>
          </li>
        </ul>
      </div>
      <div className='cuerpo' id='cuerpo'>
        <div>
          <span className='titulo1'>
            Entre los <span className='beneficios_text'>beneficios</span> que
          </span>
          <br></br>
          <span className='titulo2'>ofrecemos </span>
          <span className='titulo1'>se encuentran</span>
        </div>
        <div className='beneficios'>
          <ul>
            <li>
              <button className='btn'> - </button>
            </li>
            <li>
              <img src={clockImage} className='item' alt='' />
              <p className='texto'>Flexibilidad</p>
              <p className='texto'>Horaria</p>
            </li>
            <li>
              <img src={officeImage} className='item' alt='' />
              <p className='texto'>Home office</p>
            </li>
            <li>
              <img src={workshopkImage} className='item' alt='' />
              <p className='texto'>Capacitaciones</p>
              <p className='texto'>y workshops</p>
            </li>
            <li>
              <img src={snackImage} className='item' alt='' />
              <p className='texto'>Snacks, frutas</p>
              <p className='texto'>y bebidas gratis</p>
            </li>
            <li>
              <button className='btn'> - </button>
            </li>
          </ul>
        </div>
        <div className='indicadores'>
          <ul>
            <li>
              <div className='active'></div>
            </li>
            <li>
              <div className='circulo'></div>
            </li>
            <li>
              <div className='circulo'></div>
            </li>
          </ul>
        </div>
      </div>
      <div className='final'>
        <span className='titulo1'>
          Gracias por <span className='sub_rayado'>completar el ejercicio</span>
        </span>
        <br></br>
        <span className='titulo1'>Te invitamos a ver más información</span>
        <br></br>
        <div className='btn_section'>
          <ul>
            <li>
              <a href='https://www.instagram.com/waconomads/' target='_blank'>
                <img src={instagram} alt='' />
              </a>
            </li>
            <li>
              <button className='link_btn' onClick={abrirLink}>
                {' '}
                Conocer más{' '}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer'>
        <hr className='line' style={{ width: '1110px' }} />
        <img src={logo} alt='' />
      </div>
    </>
  );
};
