import { useSelector, useDispatch } from "react-redux";
import { State } from "../modules";
import { counterActions } from "../modules/counter";
import { useCallback } from "react";

export default function useCounter() {
  const value = useSelector((state: State) => state.counter.value);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(counterActions.increment(1)), [
    dispatch,
  ]);
  const onDecrease = useCallback(() => dispatch(counterActions.decrement(1)), [
    dispatch,
  ]);

  return {
    value,
    onIncrease,
    onDecrease,
  };
}
