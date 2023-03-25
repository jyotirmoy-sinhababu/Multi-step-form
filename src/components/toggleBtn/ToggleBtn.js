import React from 'react';
import './toggleBtn.css';

const ToggleBtn = ({ isActive, setIsActive }) => {
  const handleChange = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <label className='switch'>
        <input
          type='checkbox'
          onChange={() => {
            handleChange();
          }}
        />
        <span className='slider round'></span>
      </label>
    </div>
  );
};
export default ToggleBtn;
