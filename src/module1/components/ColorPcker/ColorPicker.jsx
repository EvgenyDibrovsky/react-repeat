import s from './ColorPicker.module.css';
import Container from '../../../components/Container/Container';

const ColorPicker = ({ options }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default ColorPicker;
