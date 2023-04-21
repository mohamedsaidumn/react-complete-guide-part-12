import React from "react";
import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { rootReducerType } from "./store/types";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector(
    (state: rootReducerType) => state.auth.isAuthenticated
  );

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
