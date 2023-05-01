import { createSlice } from "@reduxjs/toolkit";

createSlice;

interface Counter {
  count: number;
}

const initialState: Counter = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.count++;
    },
    decreament: (state) => {
      state.count--;
    },
  },
});

export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;
