import React from 'react';

import advance from '../../assets/advanced.svg';
import arcade from '../../assets/arcade.svg';
import pro from '../../assets/pro.svg';

const SelectPlan = () => {
  return (
    <>
      <h2>Select your plan</h2>
      <p>you have the option of monthly or yearly billing</p>
      <div>
        <button>
          <div>
            <img src={arcade} alt='arcade' className='img' />
          </div>
          <div>
            <p>Arcade</p>
            <p>$9/mo</p>
          </div>
        </button>
        <button>
          <div>
            <img src={advance} alt='advance' className='img' />
          </div>
          <div>
            <p>Advanced</p>
            <p>$12/mo</p>
          </div>
        </button>
        <button>
          <div>
            <img src={pro} alt='pro' className='img' />
          </div>
          <div>
            <p>Pro</p>
            <p>$15/mo</p>
          </div>
        </button>
      </div>
      <div>
        <label className='switch'>
          <input type='checkbox' />
          <span className='slider round'></span>
        </label>
      </div>
    </>
  );
};

export default SelectPlan;
