import { AnyAction, Reducer } from "redux";

export type counterStateType = { counter: number; showCounter: boolean };
export type authStateType = { isAuthenticated: boolean };
export type rootReducerType = {
  counter: {
    counter: number;
    showCounter: boolean;
  };
  auth: {
    isAuthenticated: boolean;
  };
};
