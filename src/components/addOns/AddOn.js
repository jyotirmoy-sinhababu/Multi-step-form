import React from 'react';

import { useDispatch } from 'react-redux';

import {
  decrement,
  increment,
} from '../../components/features/countControl/CountSlice';

import './addOn.css';
const AddOn = ({ setInputData, inputData, isActive }) => {
  const dispatch = useDispatch();

  // monitor change
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <div className='addOn-cnt'>
      <div className='addOn-head-cnt'>
        <h2 className='addOn-header-txt'>Pick add-ons</h2>
        <p className='addOn-para-txt'>
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      {isActive ? (
        <div className='addOn-input-main-cnt'>
          {' '}
          <div className='addOn-input-cnt'>
            <input
              className='addOn-inp'
              type='checkbox'
              value='1'
              name='monthlyService'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div className='addOn-dtls'>
              <div>
                <label className='addOn-label'> Online Service</label>
                <p className='input-infrm-txt'>Access to multiplayer game</p>
              </div>
              <div>
                <p>+$1/mo</p>
              </div>
            </div>
          </div>
          <div className='addOn-input-cnt'>
            <input
              className='addOn-inp'
              type='checkbox'
              value='2'
              name='monthlyStorage'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div className='addOn-dtls'>
              <div>
                <label className='addOn-label'> Larger Storage</label>
                <p className='input-infrm-txt'>Extra 1TB of cloud storage </p>
              </div>
              <div>
                <p>+$2/mo</p>
              </div>
            </div>
          </div>
          <div className='addOn-input-cnt'>
            <input
              className='addOn-inp'
              type='checkbox'
              value='2'
              name='monthlyProfile'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div className='addOn-dtls'>
              <div>
                <label className='addOn-label'> Customizable Profile</label>
                <p className='input-infrm-txt'>Custom theme on your profile </p>
              </div>
              <div>
                <p>+$2/mo</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='addOn-input-main-cnt'>
          <div className='addOn-input-cnt'>
            <input
              className='addOn-inp'
              type='checkbox'
              value='10'
              name='yrService'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div className='addOn-dtls'>
              <div>
                <label className='addOn-label'> Online Service</label>
                <p className='input-infrm-txt'>Access to multiplayer game</p>
              </div>
              <div>
                <p>+$10/yr</p>
              </div>
            </div>
          </div>
          <div className='addOn-input-cnt'>
            <input
              className='addOn-inp'
              type='checkbox'
              value='20'
              name='yrStorage'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div className='addOn-dtls'>
              <div>
                <label className='addOn-label'> Larger Storage</label>
                <p className='input-infrm-txt'>Extra 1TB of cloud storage </p>
              </div>
              <div>
                <p>+$20/yr</p>
              </div>
            </div>
          </div>
          <div className='addOn-input-cnt'>
            <input
              className='addOn-inp'
              type='checkbox'
              value='20'
              name='yrProfile'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div className='addOn-dtls'>
              <div>
                <label className='addOn-label'> Customizable Profile</label>
                <p className='input-infrm-txt'>Custom theme on your profile </p>
              </div>
              <div>
                <p>+$20/yr</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <button onClick={() => dispatch(decrement())}>Back</button>
        <button onClick={() => dispatch(increment())}>Next</button>
      </div>
    </div>
  );
};

export default AddOn;
