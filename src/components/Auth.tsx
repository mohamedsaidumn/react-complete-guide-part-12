import classes from "./Auth.module.css";
import { rootActions } from "../store";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event: FormEvent) => {
    event.preventDefault();

    dispatch(rootActions.auth.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
