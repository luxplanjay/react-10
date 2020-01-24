import React, { Component } from 'react';
import CounterControls from './CounterControls';

export default class Counter extends Component {
  static propTypes = {};

  static defaultProps = { initialValue: 0, step: 1 };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState, props) => {
      return {
        value: prevState.value + props.step,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState, props) => {
      return {
        value: prevState.value - props.step,
      };
    });
  };

  render() {
    return (
      <div>
        <CounterControls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <span>{this.state.value}</span>
      </div>
    );
  }
}
