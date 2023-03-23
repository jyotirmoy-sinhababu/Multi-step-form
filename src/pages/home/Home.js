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

  const [count, setCount] = useState(0);
  const [isForm, setIsForm] = useState(true);
  console.log(count);

  // control form navigation

  const nextBtn = () => {
    if (count < 4) setCount((prev) => prev + 1);
    if (count == 4) {
      setIsForm(false);
    }

    console.log('not ok');
  };

  const backBtn = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  //control form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputData) {
      localStorage.setItem('inputData', JSON.stringify(inputData));
      console.log('ok');
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
        isForm={isForm}
      />
    </div>
  );
};

export default Home;
