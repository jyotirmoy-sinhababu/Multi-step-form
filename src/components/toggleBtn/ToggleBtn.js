import React from 'react';
import './toggleBtn.css';

const ToggleBtn = ({ isActive, setIsActive }) => {
  const handleChange = () => {
    setIsActive(!isActive);
  };
  return (
    <div className='t-s-cntnr'>
      <input
        onChange={handleChange}
        className='toggle-checkbox'
        type='checkbox'
      />
      <label
        className={`toggle-label ${isActive ? 'active' : 'inactive'}`}
        htmlFor='toggle-checkbox'
      >
        <span
          className={`switch ${isActive ? 'switch-on' : 'switch-off'}`}
        ></span>
      </label>
    </div>
  );
};
export default ToggleBtn;
