import React, { useState } from 'react';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';
import AddOn from '../../components/addOns/AddOn';
import Summary from '../../components/summary/Summary';
import Message from '../../components/message/Message';

import './container.css';

const MainPage = ({ count, backBtn, nextBtn, setInputData, inputData }) => {
  const [isActive, setIsActive] = useState(true);

  const [isForm, setIsForm] = useState(true);

  //control form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsForm(false);
    if (inputData) {
      localStorage.setItem('inputData', JSON.stringify(inputData));
      console.log('ok');
    }
  };

  return (
    <div className='form-cnt'>
      <div>
        {isForm ? (
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
        ) : (
          <Message />
        )}
      </div>

      <div className='cnt-btn'>
        {count > 0 ? (
          <button
            className={`back-btn ${!isForm ? 'backBtn-on' : 'backBtn-off'}`}
            onClick={backBtn}
          >
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
            className={`confirm-btn ${!isForm ? 'formBtnOn' : 'formBtnOff'}`}
          >
            confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default MainPage;
