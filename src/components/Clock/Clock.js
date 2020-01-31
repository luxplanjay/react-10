import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    console.log(`clearInterval ${this.intervalId}`);

    clearInterval(this.intervalId);
  }

  render() {
    return <div className="Clockface">{this.state.time}</div>;
  }
}
