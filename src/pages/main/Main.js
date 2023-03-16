import React from 'react';

import YourInfo from '../../components/info/YourInfo';
import SelectPlan from '../../components/plan/SelectPlan';
import AddOn from '../../components/addOns/AddOn';

const Main = ({ count, backBtn, nextBtn }) => {
  console.log(count);
  return (
    <div>
      <form>
        {count == 1 ? (
          <YourInfo />
        ) : count == 2 ? (
          <SelectPlan />
        ) : count == 3 ? (
          <AddOn />
        ) : null}
      </form>
      <div>
        {count > 1 ? <button onClick={backBtn}>Go Back</button> : null}
        {count == 4 ? (
          <button>confirm</button>
        ) : (
          <button onClick={nextBtn}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Main;
