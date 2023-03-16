import React from 'react';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';
import AddOn from '../../components/addOns/AddOn';

const Home = () => {
  return (
    <div>
      <form>
        <YourInfo />
        <SelectPlan />
        <AddOn />
      </form>
    </div>
  );
};

export default Home;
