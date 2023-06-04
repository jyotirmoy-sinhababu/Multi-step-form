import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/countControl/CountSlice';

export default configureStore({
  reducer: {
    counter: countReducer,
  },
});
