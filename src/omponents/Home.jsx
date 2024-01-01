import React from 'react';
import Header from './Header';
import HomeImg from '../img/home-img.png';

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='home-inner'>
        <div className='home-title'>
          <p className='title'>
            Kaliteli <span>Dijital Hizme</span>
          </p>
          <p className='slogan'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            quos nisi ex omnis adipisci sit. Hic beatae eligendi tenetur ipsa!
          </p>
        </div>
        <div className='home-img'>
          <img src={HomeImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Home;
