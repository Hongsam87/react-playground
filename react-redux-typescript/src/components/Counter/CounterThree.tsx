import React from "react";
import useCounter from "../../hooks/useCounter";

function CounterThree() {
  const { value, onIncrease, onDecrease } = useCounter();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default CounterThree;
