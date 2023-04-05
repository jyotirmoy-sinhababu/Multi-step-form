import React, { useState } from 'react';
import SideBar from '../../components/sidebar/SideBar';
import Container from '../../pages/container/Container';
import './home.css';

const Home = () => {
  // All states
  const [inputData, setInputData] = useState({
    email: '',
    name: '',
    number: '',
    monthlyPlan: '',
    yearlyPlan: '',
    monthlyService: '',
    monthlyStorage: '',
    monthlyProfile: '',
    yrService: '',
    yrStorage: '',
    yrProfile: '',
  });

  const [data, setData] = useState([]);

  const [count, setCount] = useState(0);

  const [isActive, setIsActive] = useState(true);

  // control form navigation

  const nextBtn = () => {
    if (count < 3) setCount((prev) => prev + 1);

    console.log('not ok');
  };

  const backBtn = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className='main-home-cnt'>
      <div className='home-cnt'>
        <SideBar count={count} />
        <Container
          setInputData={setInputData}
          inputData={inputData}
          nextBtn={nextBtn}
          backBtn={backBtn}
          count={count}
          isActive={isActive}
          setIsActive={setIsActive}
          // data={data}
          // setData={setData}
        />
      </div>
    </div>
  );
};

export default Home;
