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
  });

  const [count, setCount] = useState(1);

  // control form navigation

  const nextBtn = () => {
    if (count < 4) setCount((prev) => prev + 1);
  };

  const backBtn = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className='home-cnt'>
      <SideBar count={count} />
      <Container
        setInputData={setInputData}
        inputData={inputData}
        nextBtn={nextBtn}
        backBtn={backBtn}
        count={count}
      />
    </div>
  );
};

export default Home;
