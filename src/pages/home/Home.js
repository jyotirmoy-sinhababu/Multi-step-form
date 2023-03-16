import React, { useState } from 'react';

import SideBar from '../../components/sideBar/SideBar';
import Main from '../main/Main';

const Home = () => {
  // All states
  const [inputData, setInputData] = useState({
    email: '',
    name: '',
    number: '',
    monthlyPlan: '',
    yearlyPlan: '',
    addOnsMonthly: '',
    addOnsYearly: '',
  });

  const [isOn, setIsOn] = useState(true);
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
    <div>
      <SideBar count={count} />
      <Main nextBtn={nextBtn} backBtn={backBtn} count={count} />
    </div>
  );
};

export default Home;
