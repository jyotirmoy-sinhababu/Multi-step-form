import React from 'react';

import './summary.css';

const Summary = ({ inputData, isActive }) => {
  console.log(inputData.monthlyPlan);
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
                {inputData ? (
                  <p className='arcade-data'>{inputData.monthlyPlan}</p>
                ) : null}
              </div>
            </div>
            <div className='storage-service-cnt'>
              {' '}
              <div className='online-service-cnt'>
                <p className='online-service-txt'>Online service</p>
                {inputData ? (
                  <p className='online-service-data'>
                    {inputData.monthlyService}
                  </p>
                ) : null}
              </div>
              <div className='storage-cnt'>
                <p className='storage-txt'>Larger Storage</p>
                {inputData ? (
                  <p className='storage-data'> {inputData.monthlyStorage}</p>
                ) : null}
              </div>
            </div>
          </div>
          <div className='summary-total-cnt'>
            <div className='summary-total-data-cnt'>
              <p className='total-txt'>Total </p>
              {inputData ? (
                <p className='total-data'>
                  $
                  {+inputData.monthlyPlan +
                    +inputData.monthlyService +
                    +inputData.monthlyStorage}
                </p>
              ) : (
                <p>0</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <div>
                <p>Arcade</p>

                <p>(yearly)</p>
              </div>
              <div>{inputData ? <p>{inputData.yearlyPlan}</p> : null}</div>
            </div>
            <div>
              <p>Online service</p>
              {inputData ? <p>{inputData.yrService}</p> : null}
            </div>
            <div>
              <p>Larger Storage</p>
              {inputData ? <p>{inputData.yrStorage}</p> : null}
            </div>
          </div>
          <div>
            <div>
              <p>Total </p>
              {inputData ? (
                <p>
                  $
                  {+inputData.yearlyPlan +
                    +inputData.yrService +
                    +inputData.yrStorage}
                </p>
              ) : (
                <p>0</p>
              )}
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
