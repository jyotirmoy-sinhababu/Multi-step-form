import React, { useState } from 'react';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';
import AddOn from '../../components/addOns/AddOn';
import Summary from '../../components/summary/Summary';

import './container.css';

const MainPage = ({
  count,
  backBtn,
  nextBtn,
  setInputData,
  inputData,
  handleSubmit,
}) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className='form-cnt'>
      <div>
        <form className='form' id='formId'>
          {count == 0 ? (
            <YourInfo setInputData={setInputData} inputData={inputData} />
          ) : count == 1 ? (
            <SelectPlan
              setInputData={setInputData}
              inputData={inputData}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ) : count == 2 ? (
            <AddOn
              setInputData={setInputData}
              inputData={inputData}
              isActive={isActive}
            />
          ) : (
            <Summary inputData={inputData} isActive={isActive} />
          )}
        </form>
      </div>

      <div className='cnt-btn'>
        {count > 0 ? (
          <button className='back-btn' onClick={backBtn}>
            Go Back
          </button>
        ) : (
          <div className='empty-div'>don't go back</div>
        )}
        {count != 3 ? (
          <button type='button' className='nxt-btn' onClick={nextBtn}>
            Next
          </button>
        ) : (
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            type='submit'
            className='confirm-btn'
          >
            confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default MainPage;
