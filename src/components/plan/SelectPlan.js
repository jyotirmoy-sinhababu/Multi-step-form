import React from 'react';

import './selectPlan.css';

import advance from '../../assets/advanced.svg';
import arcade from '../../assets/arcade.svg';
import pro from '../../assets/pro.svg';
import ToggleBtn from '../toggleBtn/ToggleBtn';

const SelectPlan = ({ setInputData, inputData, isActive, setIsActive }) => {
  //controls the click of add on buttons

  const handleClick = (amount) => {
    if (isActive) {
      setInputData({ ...inputData, monthlyPlan: amount });
      console.log('done');
    } else setInputData({ ...inputData, yearlyPlan: amount });
  };
  return (
    <div className='plan-cnt'>
      <div className='plan-small-cnt'>
        <h2>Select your plan</h2>
        <p>you have the option of monthly or yearly billing</p>
      </div>
      {isActive ? (
        <div className='plan-btn-cnt'>
          <button
            type='button'
            className='plan-btn'
            onClick={() => {
              handleClick(9);
            }}
          >
            <div className='plan-btn-img-cnt'>
              <img src={arcade} alt='arcade' className='img' />
            </div>
            <div className='plan-btn-para-cnt'>
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
            <div className='plan-btn-img-cnt'>
              <img src={advance} alt='advance' className='img' />
            </div>
            <div className='plan-btn-para-cnt'>
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
            <div className='plan-btn-img-cnt'>
              <img src={pro} alt='pro' className='img' />
            </div>
            <div className='plan-btn-para-cnt'>
              <p>Pro</p>
              <p>$15/mo</p>
            </div>
          </button>
        </div>
      ) : (
        <div className='plan-btn-cnt'>
          <button
            type='button'
            className='plan-btn'
            onClick={() => {
              handleClick(90);
            }}
          >
            <div className='plan-btn-img-cnt'>
              <img src={arcade} alt='arcade' className='img' />
            </div>
            <div className='plan-btn-para-cnt'>
              <p>Arcade</p>
              <p>$90/yr</p>
              <p>2 months free</p>
            </div>
          </button>
          <button
            className='plan-btn'
            type='button'
            onClick={() => {
              handleClick(120);
            }}
          >
            <div className='plan-btn-img-cnt'>
              <img src={advance} alt='advance' className='img' />
            </div>
            <div className='plan-btn-para-cnt'>
              <p>Advanced</p>
              <p>$120/yrf</p>
              <p>2 months free</p>
            </div>
          </button>
          <button
            className='plan-btn'
            type='button'
            onClick={() => {
              handleClick(150);
            }}
          >
            <div className='plan-btn-img-cnt'>
              <img src={pro} alt='pro' className='img' />
            </div>
            <div className='plan-btn-para-cnt'>
              <p>Pro</p>
              <p>$150/yr</p>
              <p>2 months free</p>
            </div>
          </button>
        </div>
      )}

      <div className='plan-toggleBtn-cnt'>
        <p className={`toggle-txt ${isActive ? 'toggle-on' : 'toggle-off'}`}>
          monthly
        </p>
        <ToggleBtn setIsActive={setIsActive} isActive={isActive} />
        <p className={`toggle-txt ${!isActive ? 'toggle-on' : 'toggle-off'}`}>
          yearly
        </p>
      </div>
    </div>
  );
};

export default SelectPlan;
