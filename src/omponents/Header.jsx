import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo'>techno code</div>
      <div className='navbar'>
        <ul>
          <li>Ana Sayfa</li>
          <li>Hakkimizda</li>
          <li>Hızmetlerimiz</li>
          <li>İletişim</li>
        </ul>
      </div>
      <div className='phone-num'></div>
    </div>
  );
};

export default Header;
