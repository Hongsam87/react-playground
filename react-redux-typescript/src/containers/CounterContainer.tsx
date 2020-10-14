import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import CounterTwo from "../components/Counter/CounterTwo";
import { counterActions } from "../modules/counter";
import { State } from "../modules";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  somethingExtra?: string;
};

type CounterContainerProps = StateProps & DispatchProps & OwnProps;

class CounterContainer extends Component<CounterContainerProps> {
  public handleIncrease = () => {
    this.props.CounterActions.increment(1);
  };

  public handleDecrease = () => {
    this.props.CounterActions.decrement(1);
  };

  public render() {
    return (
      <CounterTwo
        value={this.props.value}
        onIncrease={this.handleIncrease}
        onDecrease={this.handleDecrease}
      ></CounterTwo>
    );
  }
}

const mapStateToProps = (state: State) => ({
  value: state.counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  CounterActions: {
    increment: (diff: number) => dispatch(counterActions.increment(diff)),
    decrement: (diff: number) => dispatch(counterActions.decrement(diff)),
  },
});

export default connect<StateProps, DispatchProps, OwnProps, State>(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
