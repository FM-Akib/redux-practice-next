import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
      id: 1,
      count: 4
    },
    {
      id: 2,
      count: 0
    }
  ]
const countersSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment: (state,action) => {
            const counterIndex = state.findIndex((counter) => counter.id === action.payload);
            state[counterIndex].count++;
        },
        decrement: (state,action) => {
            const counterIndex = state.findIndex((counter) => counter.id === action.payload);
            state[counterIndex].count--;
        }
    }
})
export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;