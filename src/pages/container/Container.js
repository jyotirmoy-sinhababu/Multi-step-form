import React, { useState } from 'react';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';
import AddOn from '../../components/addOns/AddOn';
import Summary from '../../components/summary/Summary';

import './container.css';

const MainPage = ({ count, backBtn, nextBtn, setInputData, inputData }) => {
  const [isActive, setIsActive] = useState(true);

  console.log(count);
  return (
    <div className='form-cnt'>
      <div>
        {' '}
        <form className='form'>
          {count == 1 ? (
            <YourInfo setInputData={setInputData} inputData={inputData} />
          ) : count == 2 ? (
            <SelectPlan
              setInputData={setInputData}
              inputData={inputData}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ) : count == 3 ? (
            <AddOn setInputData={setInputData} inputData={inputData} />
          ) : count == 4 ? (
            <Summary />
          ) : null}
        </form>
      </div>

      <div className='cnt-btn'>
        {count > 1 ? (
          <button className='back-btn' onClick={backBtn}>
            Go Back
          </button>
        ) : (
          <div className='empty-div'>dont go back</div>
        )}
        {count == 4 ? (
          <button className='confirm-btn'>confirm</button>
        ) : (
          <button className='nxt-btn' onClick={nextBtn}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MainPage;
