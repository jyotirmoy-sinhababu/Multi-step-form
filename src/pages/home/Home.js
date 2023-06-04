import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import Container from '../../pages/container/Container';
import './home.css';

const Home = () => {
  return (
    <div className='main-home-cnt'>
      <div className='home-cnt'>
        <SideBar />
        <Container />
      </div>
    </div>
  );
};

export default Home;
