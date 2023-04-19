import { storeStateType } from "../types";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state: storeStateType) {
      state.counter++;
    },
    decrement(state: storeStateType) {
      state.counter--;
    },
    increase(state: storeStateType, action: PayloadAction<number>) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state: storeStateType) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
export default store;
