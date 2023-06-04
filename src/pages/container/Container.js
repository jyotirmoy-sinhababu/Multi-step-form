import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
} from '../../components/features/countControl/CountSlice';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';
import AddOn from '../../components/addOns/AddOn';
import Summary from '../../components/summary/Summary';
import Message from '../../components/message/Message';

import './container.css';

const MainPage = ({}) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='form-cnt'>
      <form>
        {count == 0 ? (
          <YourInfo />
        ) : count == 1 ? (
          <SelectPlan />
        ) : count == 2 ? (
          <AddOn />
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
