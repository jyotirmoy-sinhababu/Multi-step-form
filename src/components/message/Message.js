import React from 'react';

import './message.css';

import thankyou from '../../assets/thankyou.svg';

const Message = () => {
  return (
    <div className='message-cnt'>
      <img className='message-img' src={thankyou} alt='pic' />
      <div className='message-txt-cnt'>
        {' '}
        <h2 className='message-header'>Thank you!</h2>
        <p className='message-content'>
          Thanks for confirming your subscription! We hope you have fun using
          our platform.If you ever need a support, feel free to email us at
          support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default Message;
