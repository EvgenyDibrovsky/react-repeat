import React, { Component } from 'react';
import s from './Form.module.css';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    surname: '',
    experience: 'jubior',
    licence: 'false',
  };
  // генерируем уникальные id для input
  nameInputId = shortid.generate();
  surnameInputId = shortid.generate();

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
  handleLicenceChange = event => {
    this.setState({ licence: event.currentTarget.checked });

    console.log(event.currentTarget.checked);
  };

  reset = () => {
    this.setState({ name: '', surname: '' });
  };

  render() {
    return (
      <div className={s.formWrapper}>
        <h2 className={s.title}>Формы</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.formLabel} htmlFor={this.nameInputId}>
            Имя
            <input
              name="name"
              placeholder="Иван"
              className={s.formInput}
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label className={s.formLabel} htmlFor={this.surnameInputId}>
            Фамилия
            <input
              name="surname"
              placeholder="Иванов"
              className={s.formInput}
              type="text"
              value={this.state.surname}
              onChange={this.handleChange}
              id={this.surnameInputId}
            />
          </label>
          <p className={s.titleSelect}>Ваш уровень:</p>
          <span className={s.btnRadio}>
            <label>
              Junior
              <input
                type="radio"
                name="experience"
                value="junior"
                onChange={this.handleChange}
                checked={this.state.experience === 'junior'}
              />
            </label>
            <label>
              Middle
              <input
                type="radio"
                name="experience"
                value="middle"
                onChange={this.handleChange}
                checked={this.state.experience === 'middle'}
              />
            </label>
            <label>
              Senior
              <input
                type="radio"
                name="experience"
                value="senior"
                onChange={this.handleChange}
                checked={this.state.experience === 'senior'}
              />
            </label>
          </span>

          <label className={s.checkboxLabel}>
            Согласен с условиями
            <input className={s.checkbox}
              type="checkbox"
              name="licence"
              defaultChecked={this.state.licence}
              onChange={this.handleLicenceChange}
            />
          </label>

          <button
            type="submit"
            className={s.btnForm}
            disabled={!this.state.licence}
          >
            Отправить
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
