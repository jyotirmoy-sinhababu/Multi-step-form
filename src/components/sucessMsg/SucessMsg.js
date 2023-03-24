import React from 'react';

import thankyou from '../../assets/thankyou.svg';

const SucessMsg = () => {
  return (
    <div>
      <img src={thankyou} alt='pic' />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform.If you ever need a support, feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default SucessMsg;
