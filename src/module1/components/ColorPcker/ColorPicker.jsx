// import css from './ColorPicker.css';
const ColorPicker = ({ options }) => {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">ColorPicker</h2>
      <div>
        {options.map(option => {
          <span className="ColorPicker__option">{option.label}</span>;
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
