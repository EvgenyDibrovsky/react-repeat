import s from './ColorPicker.module.css';

const ColorPicker = ({ options }) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>ColorPicker</h2>
      <div>
        {options.map(option => {
          return (
            <span
              className={s.option}
              style={{ backgroundColor: option.color }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
