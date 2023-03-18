import React from 'react';

// import Banner from '../banner/Banner';

import './sidebar.css';

const SideBar = () => {
  return (
    <div className='sidebar-cnt'>
      {/* <Banner /> */}
      <div className='sidebar-small-cnt'>
        <div>
          <p>1</p>
        </div>
        <div>
          <p>STEP 1</p>
          <p>YOUR INFO</p>
        </div>
      </div>
      <div className='sidebar-small-cnt'>
        <div>
          <p>2</p>
        </div>
        <div>
          <p>STEP 2</p>
          <p>SELECT PLAN</p>
        </div>
      </div>
      <div className='sidebar-small-cnt'>
        <div>
          <p>3</p>
        </div>
        <div>
          <p>STEP 3</p>
          <p>ADD-ONS</p>
        </div>
      </div>
      <div className='sidebar-small-cnt'>
        <div>
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
