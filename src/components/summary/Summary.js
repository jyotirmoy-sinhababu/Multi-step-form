import React from 'react';

import {
  decrement,
  increment,
} from '../../components/features/countControl/CountSlice';

import { useDispatch } from 'react-redux';

import './summary.css';

const Summary = ({ inputData, isActive }) => {
  const dispatch = useDispatch();

  return (
    <div className='summary-main-div'>
      <div className='summary-heading-cnt'>
        <h2 className='summary-header'>Finishing up</h2>
        <p className='summary-para'>
          Double-check everything looks OK before confirming
        </p>
      </div>
      {isActive ? (
        <div className=''>
          <div className='summary-data-cnt'>
            <div className='summary-arcade-cnt'>
              <div className='summary-arcade-txt-cnt'>
                <p className='arcade-txt'>Arcade</p>

                <p className='arcade-monthly'>(monthly)</p>
              </div>
              <div className='arcade-data-cnt'>
                {inputData.monthlyPlan ? (
                  <p className='arcade-data'>${inputData.monthlyPlan}/mo </p>
                ) : (
                  <p>_____</p>
                )}
              </div>
            </div>
            <div className='storage-service-cnt'>
              {' '}
              <div className='online-service-cnt'>
                <p className='online-service-txt'>Online service</p>
                {inputData.monthlyService ? (
                  <p className='online-service-data'>
                    ${inputData.monthlyService}/mo
                  </p>
                ) : (
                  <p>_____</p>
                )}
              </div>
              <div className='storage-cnt'>
                <p className='storage-txt'>Larger Storage</p>
                {inputData.monthlyPlan ? (
                  <p className='storage-data'> ${inputData.monthlyPlan}/mo</p>
                ) : (
                  <p>_____</p>
                )}
              </div>
            </div>
          </div>
          <div className='summary-total-cnt'>
            <div className='summary-total-data-cnt'>
              <p className='total-txt'>Total (per month)</p>
              {inputData ? (
                <p className='total-data'>
                  + $
                  {+inputData.monthlyPlan +
                    +inputData.monthlyService +
                    +inputData.monthlyStorage}
                  /mo
                </p>
              ) : (
                <p>_____</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='summary-data-cnt'>
            <div className='summary-arcade-cnt'>
              <div className='summary-arcade-txt-cnt'>
                <p className='arcade-txt'>Arcade</p>

                <p className='arcade-yr'>(yearly)</p>
              </div>
              <div className='arcade-data-cnt'>
                {inputData.yearlyPlan ? (
                  <p className='arcade-data'>{inputData.yearlyPlan}</p>
                ) : (
                  <p>_____</p>
                )}
              </div>
            </div>
            <div className='storage-service-cnt'>
              {' '}
              <div className='online-service-cnt'>
                <p className='online-service-txt'>Online service</p>
                {inputData.yrService ? (
                  <p className='online-service-data'>
                    ${inputData.yrService}/yr
                  </p>
                ) : (
                  <p>_____</p>
                )}
              </div>
              <div className='storage-cnt'>
                <p className='storage-txt'>Larger Storage</p>
                {inputData.yrStorage ? (
                  <p className='storage-data'>${inputData.yrStorage}/yr</p>
                ) : (
                  <p>_____</p>
                )}
              </div>
            </div>
          </div>
          <div className='summary-total-cnt'>
            <div className='summary-total-data-cnt'>
              <p className='total-txt'>Total </p>
              {inputData ? (
                <p className='total-data'>
                  +$
                  {+inputData.yearlyPlan +
                    +inputData.yrService +
                    +inputData.yrStorage}
                  /yr
                </p>
              ) : (
                <p>_____</p>
              )}
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      )}
      <div className='summary-btn-cnt'>
        <button
          className='summary-back-btn'
          onClick={() => dispatch(decrement())}
        >
          Go back
        </button>
        <button
          className='summary-save-btn'
          onClick={() => dispatch(increment())}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
