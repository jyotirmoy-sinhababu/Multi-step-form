import React from 'react';

const AddOn = () => {
  return (
    <div>
      <div>
        <input type='checkbox' value='1' />
        <div>
          <label> Online Service</label>
          <p>Access to multiplayer game</p>
        </div>
        <div>
          <p>+$1/mo/</p>
        </div>
      </div>
      <div>
        <input type='checkbox' value='1' />
        <div>
          <label> Larger Storage</label>
          <p>Extra 1TB of cloud storage </p>
        </div>
        <div>
          <p>+$2/mo/</p>
        </div>
      </div>
      <div>
        <input type='checkbox' value='1' />
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
