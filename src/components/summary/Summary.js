import React from 'react';

const Summary = ({ inputData, isActive }) => {
  console.log(inputData);
  return (
    <div>
      <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div>
        <div>
          <div>
            <p>Arcade</p>

            <p>(monthly)</p>
          </div>
          <div>{inputData ? <p>{}</p> : null}</div>
        </div>
        <div>
          <p>Online service</p>
          <p>+$1/mo</p>
        </div>
        <div>
          <p>Larger Storage</p>
          <p>+$2/mo</p>
        </div>
      </div>
      <div>
        <div>
          <p>Total </p>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
