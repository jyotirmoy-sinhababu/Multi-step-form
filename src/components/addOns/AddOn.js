import React from 'react';

import './addOn.css';

const AddOn = ({ setInputData, inputData, isActive }) => {
  // monitor change
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  console.log(inputData);

  return (
    <div className='addOn-cnt'>
      <div className='addOn-headers'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      {isActive ? (
        <div>
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
                <label> Online Service</label>
                <p>Access to multiplayer game</p>
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
                <label> Larger Storage</label>
                <p>Extra 1TB of cloud storage </p>
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
                <label> Customizable Profile</label>
                <p>Custom theme on your profile </p>
              </div>
              <div>
                <p>+$2/mo</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
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
                <label> Online Service</label>
                <p>Access to multiplayer game</p>
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
                <label> Larger Storage</label>
                <p>Extra 1TB of cloud storage </p>
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
                <label> Customizable Profile</label>
                <p>Custom theme on your profile </p>
              </div>
              <div>
                <p>+$20/yr</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOn;
