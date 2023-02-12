import s from './Counter.module.css';
import React from 'react';

class Counter extends React.Component {
  handleIncrement = event => {
    console.log('Уменьшить на 1');
    console.log(event);
  };
  handleDecrement = event => {
    console.log(' Увеличить на 1');
    console.log(event);
  };
  render() {
    return (
      <div className={s.counter}>
        <span className={s.value}>0</span>

        <div className={s.controls}>
          <button type="button" onClick={this.handleIncrement}>
            Уменьшить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Увеличить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
