import React from 'react';

const AddOn = ({ setInputData, inputData }) => {
  // monitor change
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  console.log(inputData);

  return (
    <div>
      <div>
        <input
          type='checkbox'
          value='1'
          name='monthlyService'
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div>
          <label> Online Service</label>
          <p>Access to multiplayer game</p>
        </div>
        <div>
          <p>+$1/mo/</p>
        </div>
      </div>
      <div>
        <input
          type='checkbox'
          value='2'
          name='monthlyStorage'
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div>
          <label> Larger Storage</label>
          <p>Extra 1TB of cloud storage </p>
        </div>
        <div>
          <p>+$2/mo/</p>
        </div>
      </div>
      <div>
        <input
          type='checkbox'
          value='2'
          name='monthlyProfile'
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div>
          <label> Customizable Profile</label>
          <p>Custom theme on your profile </p>
        </div>
        <div>
          <p>+$2/mo/</p>
        </div>
      </div>
    </div>
  );
};

export default AddOn;
