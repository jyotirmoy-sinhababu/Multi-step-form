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

  const {
    email,
    name,
    number,
    monthlyPlan,
    yearlyPlan,
    monthlyService,
    monthlyStorage,
    monthlyProfile,
    yrService,
    yrStorage,
    yrProfile,
  } = inputData;

  //control form submission

  const handleSubmit = (e) => {
    if (inputData && count == 4) {
      e.preventDefault();
      localStorage.setItem('inputData', JSON.stringify(inputData));
    }
  };

  return (
    <div className='home-cnt'>
      <SideBar count={count} />
      <Container
        handleSubmit={handleSubmit}
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
