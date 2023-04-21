import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./counterSlice";
import { authSliceReducer } from "./authSlice";
import { counterActions } from "./counterSlice";
import { authActions } from "./authSlice";

export const rootActions = { counter: counterActions, auth: authActions };

const rootReducer = { counter: counterSliceReducer, auth: authSliceReducer };
const store = configureStore({
  reducer: rootReducer,
});

export default store;
