import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { rootReducerType } from "../store/types";
import { useDispatch } from "react-redux";
import { SyntheticEvent } from "react";
import { rootActions } from "../store";

const Header = () => {
  const isAuth = useSelector(
    (state: rootReducerType) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();

  const logoutHandler = (event: SyntheticEvent) => {
    dispatch(rootActions.auth.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
