import React from 'react';
import './banner.css';

import sidebarImg from '../../assets/sidebar.svg';

const Banner = () => {
  return (
    <div className='banner-cnt'>
      <img className='banner-img' src={sidebarImg} alt='' />
    </div>
  );
};

export default Banner;
