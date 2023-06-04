import React from 'react';

import { useDispatch } from 'react-redux';

import { increment } from '../../components/features/countControl/CountSlice';

import './info.css';

const YourInfo = ({ setInputData, inputData }) => {
  const dispatch = useDispatch();

  // monitor changes
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  // console.log(inputData);

  return (
    <div className='info-cnt'>
      <div>
        {' '}
        <h2 className='info-cnt-header'>Personal info</h2>
        <p className='info-note'>
          Please provide your name,email address and phone number.
        </p>
      </div>

      <div className='info-input-cnt'>
        <div className='input-cnt'>
          {' '}
          <label className='input-label'>Name</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className='input-box'
            type='txt'
            name='name'
            placeholder='e.g. Shiva'
          />
        </div>
        <div className='input-cnt'>
          <label className='input-label'>Email Address</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className='input-box'
            type='txt'
            name='email'
            placeholder='e.g. Shiva@lorem.com'
          />
        </div>
        <div className='input-cnt'>
          {' '}
          <label className='input-label'>Phone Number</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className='input-box'
            type='number'
            name='number'
            placeholder='e.g. 91 74512875'
          />
        </div>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Next</button>
      </div>
    </div>
  );
};

export default YourInfo;
