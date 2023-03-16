import React from 'react';

const SelectPlan = () => {
  return (
    <>
      <h2>Select your plan</h2>
      <p>you have the option of monthly or yearly billing</p>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3 </button>
      </div>
      <div>
        <label className='switch'>
          <input type='checkbox' />
          <span className='slider round'></span>
        </label>
      </div>
    </>
  );
};

export default SelectPlan;
