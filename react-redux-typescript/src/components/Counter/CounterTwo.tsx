import React, { Component } from "react";

export interface CounterProps {
  value: number;
  onIncrease(): void;
  onDecrease(): void;
}

class CounterTwo extends Component<CounterProps> {
  public render() {
    const { value, onIncrease, onDecrease } = this.props;

    return (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    );
  }
}

export default CounterTwo;
