import React, { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    surname: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', surname: '' });
  };

  render() {
    return (
      <div className={s.formWrapper}>
        <h2 className={s.title}>Формы</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.formLabel}>
            Имя
            <input
              name="name"
              placeholder="Иван"
              className={s.formInput}
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={s.formLabel}>
            Фамилия
            <input
              name="surname"
              placeholder="Иванов"
              className={s.formInput}
              type="text"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={s.btnForm}>
            Отправить
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
