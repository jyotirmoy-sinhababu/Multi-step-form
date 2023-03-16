import React from 'react';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';

const Home = () => {
  return (
    <div>
      <form>
        <YourInfo />
        <SelectPlan />
      </form>
    </div>
  );
};

export default Home;
