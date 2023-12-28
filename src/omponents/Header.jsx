import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-inner'>
        <div className='logo'>
          <h3>
            techno <span className='color'>code</span>
          </h3>
        </div>
        <div className='navbar'>
          <ul>
            <li>Ana Sayfa</li>
            <li>Hakkimizda</li>
            <li>Hızmetlerimiz</li>
            <li>İletişim</li>
          </ul>
        </div>
        <div className='phone-num'>
          <p>bize ulaşın</p>
          <p className='number'>+90 545 152 2343</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
