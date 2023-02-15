import React, { Component } from 'react';
import s from './Clock.module.css';

class Clock extends Component {
  state = {
    time: new Date().toLocaleString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleString(),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={s.clock}>{this.state.time}</div>;
  }
}

export default Clock;
