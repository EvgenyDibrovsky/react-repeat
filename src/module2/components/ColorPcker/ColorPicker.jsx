import s from './ColorPicker.module.css';
import React, { Component } from 'react';

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [s.option];
    if (index === this.state.activeOptionIndex) {
      optionClasses.push(s.activeOption);
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIndex } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIndex];

    return (
      <div className={s.colorpicker}>
        <h2 className={s.title}>ColorPicker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
                outline: `3px solid ${color}`,
              }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
