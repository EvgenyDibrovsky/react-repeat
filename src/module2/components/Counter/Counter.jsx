import s from './Counter.module.css';
import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
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
    return (
      <div className={s.counter}>
        <span className={s.value}>{this.state.value}</span>

        <div className={s.controls}>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
