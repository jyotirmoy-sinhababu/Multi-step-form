import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';
import AddOn from '../../components/addOns/AddOn';
import Summary from '../../components/summary/Summary';
import Message from '../../components/message/Message';

import './container.css';

const MainPage = ({}) => {
  const [inputData, setInputData] = useState();
  const [isActive, setIsActive] = useState(true);

  const count = useSelector((state) => state.counter.value);

  console.log(inputData);

  return (
    <div className='form-cnt'>
      <form>
        {count == 0 ? (
          <YourInfo inputData={inputData} setInputData={setInputData} />
        ) : count == 1 ? (
          <SelectPlan
            inputData={inputData}
            setInputData={setInputData}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ) : count == 2 ? (
          <AddOn
            inputData={inputData}
            setInputData={setInputData}
            isActive={isActive}
          />
        ) : count == 3 ? (
          <Summary inputData={inputData} isActive={isActive} />
        ) : count == 4 ? (
          <Message />
        ) : null}
      </form>
    </div>
  );
};

export default MainPage;
