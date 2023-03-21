import React from 'react';

const Summary = ({ inputData, isActive }) => {
  console.log(inputData.monthlyPlan);
  return (
    <div>
      <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      {isActive ? (
        <div>
          <div>
            <div>
              <div>
                <p>Arcade</p>

                <p>(monthly)</p>
              </div>
              <div>{inputData ? <p>{inputData.monthlyPlan}</p> : null}</div>
            </div>
            <div>
              <p>Online service</p>
              {inputData ? <p>{inputData.monthlyService}</p> : null}
            </div>
            <div>
              <p>Larger Storage</p>
              {inputData ? <p>{inputData.monthlyStorage}</p> : null}
            </div>
          </div>
          <div>
            <div>
              <p>Total </p>
              {inputData ? (
                <p>
                  $
                  {+inputData.monthlyPlan +
                    +inputData.monthlyService +
                    +inputData.monthlyStorage}
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
