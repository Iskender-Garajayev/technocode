import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-inner'>
        <div className='logo'>
          <div className='circule'></div>
          <h3>
            techno <span className='color'>code</span>
          </h3>
        </div>
        <div className='navbar'>
          <ul>
            <Link to='/'>
              <li>Ana Sayfa</li>
            </Link>
            <Link to='/hakkimizda'>
              <li>Hakkımızda</li>
            </Link>
            <Link to='/hizmetimiz'>
              <li>Hizmetlerimiz</li>
            </Link>
            <Link to='/iletisim'>
              <li>İletişim</li>
            </Link>
          </ul>
        </div>
        <div className='phone-num'>
          <div className='blob'>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#8ACDD7'
                d='M56.2,-54.6C66,-46.4,62.4,-23.2,54.9,-7.5C47.4,8.2,36,16.4,26.2,23.4C16.4,30.4,8.2,36.2,0,36.2C-8.2,36.2,-16.4,30.4,-28.8,23.4C-41.2,16.4,-57.8,8.2,-62.3,-4.5C-66.8,-17.2,-59.2,-34.4,-46.8,-42.6C-34.4,-50.8,-17.2,-50.1,3,-53.1C23.2,-56.1,46.4,-62.8,56.2,-54.6Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
          <p className='num-title'>Bize ulaşın</p>
          <p className='number'>+90 545 152 2343</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
