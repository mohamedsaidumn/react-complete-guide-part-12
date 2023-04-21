import { counterStateType } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state: counterStateType) {
      state.counter++;
    },
    decrement(state: counterStateType) {
      state.counter--;
    },
    increase(state: counterStateType, action: PayloadAction<number>) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state: counterStateType) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
