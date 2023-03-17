import React from 'react';

import './selectPlan.css';

import advance from '../../assets/advanced.svg';
import arcade from '../../assets/arcade.svg';
import pro from '../../assets/pro.svg';
import ToggleBtn from '../toggleBtn/ToggleBtn';

const SelectPlan = ({ setInputData, inputData, isActive, setIsActive }) => {
  //controls the click of add on buttons

  const handleClick = (amount) => {
    setInputData({ ...inputData, monthlyPlan: amount });
  };
  console.log(inputData);
  return (
    <>
      <h2>Select your plan</h2>
      <p>you have the option of monthly or yearly billing</p>
      <div className='plan-btn-cnt'>
        <button
          type='button'
          className='plan-btn'
          onClick={() => {
            handleClick(9);
          }}
        >
          <div>
            <img src={arcade} alt='arcade' className='img' />
          </div>
          <div>
            <p>Arcade</p>
            <p>$9/mo</p>
          </div>
        </button>
        <button
          className='plan-btn'
          type='button'
          onClick={() => {
            handleClick(12);
          }}
        >
          <div>
            <img src={advance} alt='advance' className='img' />
          </div>
          <div>
            <p>Advanced</p>
            <p>$12/mo</p>
          </div>
        </button>
        <button
          className='plan-btn'
          type='button'
          onClick={() => {
            handleClick(15);
          }}
        >
          <div>
            <img src={pro} alt='pro' className='img' />
          </div>
          <div>
            <p>Pro</p>
            <p>$15/mo</p>
          </div>
        </button>
      </div>
      <div>
        <ToggleBtn setIsActive={setIsActive} isActive={isActive} />
      </div>
    </>
  );
};

export default SelectPlan;
