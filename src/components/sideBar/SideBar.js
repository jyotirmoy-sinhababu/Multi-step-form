import React from 'react';

// import Banner from '../banner/Banner';

import './sidebar.css';

const SideBar = ({ count }) => {
  return (
    <div className='sidebar-cnt'>
      {/* <Banner /> */}
      <div className='sidebar-small-cnt'>
        <div
          className={`sidebar-num-cnt ${count == 1 ? 'active' : 'inactive'}`}
        >
          <p>1</p>
        </div>
        <div>
          <p>STEP 1</p>
          <p>YOUR INFO</p>
        </div>
      </div>
      <div className='sidebar-small-cnt'>
        <div
          className={`sidebar-num-cnt ${count == 2 ? 'active' : 'inactive'}`}
        >
          <p>2</p>
        </div>
        <div>
          <p>STEP 2</p>
          <p>SELECT PLAN</p>
        </div>
      </div>
      <div className='sidebar-small-cnt'>
        <div
          className={`sidebar-num-cnt ${count == 3 ? 'active' : 'inactive'}`}
        >
          <p>3</p>
        </div>
        <div>
          <p>STEP 3</p>
          <p>ADD-ONS</p>
        </div>
      </div>
      <div className='sidebar-small-cnt'>
        <div
          className={`sidebar-num-cnt ${count == 4 ? 'active' : 'inactive'}`}
        >
          <p>4</p>
        </div>
        <div>
          <p>STEP 4</p>
          <p>SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
