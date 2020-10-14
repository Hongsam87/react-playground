import React, { Component } from "react";

interface CounterProps {
  startNumber: number;
}

interface CounterState {
  number: number;
}

class Counter extends Component<CounterProps, CounterState> {
  public state = {
    number: 0,
  };

  constructor(props: CounterProps) {
    super(props);
    this.state.number = props.startNumber;
  }

  public increase = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  public decrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  public render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Counter;
