import s from './ColorPicker.module.css';
import React, { Component } from 'react';

class ColorPicker extends Component {
  render() {
    return (
      <div className={s.container}>
        <h2 className={s.title}>ColorPicker</h2>
        <div>
          {this.props.options.map(({ label, color }) => (
            <button
              key={label}
              className={s.option}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
