import s from './ColorPicker.module.css';

const ColorPicker = ({ options }) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>ColorPicker</h2>
      <ul>
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className={s.option}
              style={{ backgroundColor: option.color }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorPicker;
