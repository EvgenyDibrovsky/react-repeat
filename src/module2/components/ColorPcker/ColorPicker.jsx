import s from './ColorPicker.module.css';
import React, { Component } from 'react';

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 1,
  };

  makeOptionClassName = index => {
    const optionClases = [s.option];
    if (index === this.state.activeOptionIndex) {
      optionClases.push(s.activeOption);
    }
    return optionClases.join(' ');
  };

  render() {
    return (
      <div className={s.container}>
        <h2 className={s.title}>ColorPicker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);

            return (
              <button
                key={label}
                className={optionClassName}
                style={{
                  backgroundColor: color,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
