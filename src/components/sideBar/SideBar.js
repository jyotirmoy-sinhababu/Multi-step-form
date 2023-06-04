import React from 'react';

import { useSelector } from 'react-redux';

import './sidebar.css';

const SideBar = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className='sidebar-cnt'>
      <div className='sidebar-small-cnt'>
        <div className={`sidebar-num-cnt ${count == 0 ? 'on' : 'off'}`}>
          <p>1</p>
        </div>
        <div className='sidebar-para-cnt'>
          <p>STEP 1</p>
          <p>YOUR INFO</p>
        </div>
      </div>
      <div className='sidebar-small-cnt'>
        <div className={`sidebar-num-cnt ${count == 1 ? 'on' : 'off'}`}>
          <p>2</p>
        </div>
        <div className='sidebar-para-cnt'>
          <p>STEP 2</p>
          <p>SELECT PLAN</p>
        </div>
      </div>
      <div className='sidebar-small-cnt'>
        <div className={`sidebar-num-cnt ${count == 2 ? 'on' : 'off'}`}>
          <p>3</p>
        </div>
        <div className='sidebar-para-cnt'>
          <p>STEP 3</p>
          <p>ADD-ONS</p>
        </div>
      </div>
      <div className='sidebar-small-cnt'>
        <div className={`sidebar-num-cnt ${count == 3 ? 'on' : 'off'}`}>
          <p>4</p>
        </div>
        <div className='sidebar-para-cnt'>
          <p>STEP 4</p>
          <p>SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
