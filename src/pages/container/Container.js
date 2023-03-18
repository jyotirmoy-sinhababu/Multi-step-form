import React, { useState } from 'react';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';
import AddOn from '../../components/addOns/AddOn';

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
          ) : null}
        </form>
      </div>

      <div>
        {count > 1 ? <button onClick={backBtn}>Go Back</button> : null}
        {count == 4 ? (
          <button>confirm</button>
        ) : (
          <button onClick={nextBtn}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MainPage;
