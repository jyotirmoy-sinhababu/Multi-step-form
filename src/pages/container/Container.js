import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';
import AddOn from '../../components/addOns/AddOn';
import Summary from '../../components/summary/Summary';
import Message from '../../components/message/Message';

import './container.css';

const MainPage = ({}) => {
  const [isActive, setIsActive] = useState(true);

  const count = useSelector((state) => state.counter.value);

  return (
    <div className='form-cnt'>
      <form>
        {count == 0 ? (
          <YourInfo />
        ) : count == 1 ? (
          <SelectPlan isActive={isActive} setIsActive={setIsActive} />
        ) : count == 2 ? (
          <AddOn isActive={isActive} />
        ) : count == 3 ? (
          <Summary />
        ) : count == 4 ? (
          <Message />
        ) : null}
      </form>
    </div>
  );
};

export default MainPage;
