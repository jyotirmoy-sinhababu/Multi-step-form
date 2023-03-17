import React from 'react';

const YourInfo = ({ setInputData, inputData }) => {
  // monitor changes
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  // console.log(inputData);

  return (
    <div>
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        type='txt'
        name='name'
        placeholder='e.g. Shiva'
      />
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        type='txt'
        name='email'
        placeholder='e.g. Shiva@lorem.com'
      />
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        type='number'
        name='number'
        placeholder='e.g. 91 74512875'
      />
    </div>
  );
};

export default YourInfo;
