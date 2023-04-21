import { authStateType } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state: authStateType) {
      state.isAuthenticated = true;
    },
    logout(state: authStateType) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
