import React, { useState } from 'react';

import SideBar from '../../components/sideBar/SideBar';
import Main from '../main/Main';

const Home = () => {
  const [inputData, setInputData] = useState({
    email: '',
    name: '',
    number: '',
    monthlyPlan: '',
    yearlyPlan: '',
    addOnsMonthly: '',
    addOnsYearly: '',
  });

  return (
    <div>
      <SideBar />
      <Main />
    </div>
  );
};

export default Home;
