import s from './Counter.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    initialValue: PropTypes.number,
  };
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // Основываясь на предыдущем значении - Функция
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
    // Не основываясь на предыдущем значении - Объект
    // this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    // Основываясь на предыдущем значении - Функция
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
    // Не основываясь на предыдущем значении - Объект
    // this.setState({ value: this.state.value - 1 });
  };
  render() {
    const { value } = this.state;
    return (
      <div className={s.counter}>
        <h2 className={s.title}>Counter</h2>
        <span className={s.value}>{value}</span>

        <div className={s.controls}>
          <button
            className={s.btnCounter}
            type="button"
            onClick={this.handleDecrement}
          >
            Уменьшить на 1
          </button>
          <button
            className={s.btnCounter}
            type="button"
            onClick={this.handleIncrement}
          >
            Увеличить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
