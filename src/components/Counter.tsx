import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterStateType } from "../store/types";
import { rootActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: counterStateType) => state.counter);
  const show = useSelector((state: counterStateType) => state.showCounter);

  const incrementHandler = () => {
    dispatch(rootActions.counter.increment());
  };

  const decrementHandler = () => {
    dispatch(rootActions.counter.decrement());
  };

  const increaseHandler = () => {
    dispatch(rootActions.counter.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const toggleCounterHandler = () => {
    dispatch(rootActions.counter.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
