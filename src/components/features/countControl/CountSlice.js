import { createSlice } from '@reduxjs/toolkit';

export const CountSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      if (state.value != 4) {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.value != 0) {
        state.value -= 1;
      }
    },
  },
});

export const { increment, decrement } = CountSlice.actions;

export default CountSlice.reducer;
