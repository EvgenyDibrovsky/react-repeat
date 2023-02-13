import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Counter from './components/Counter/Counter';
import ColorPicker from './components/ColorPcker/ColorPicker';

const colorPickerOption = [
  { label: 'red', color: '#ff0000' },
  { label: 'green', color: '#00ff00' },
  { label: 'blue', color: '#0000ff' },
  { label: 'yellow', color: '#ffff00' },
  { label: 'pink', color: '#ff00ff' },
  { label: 'purple', color: '#800080' },
  { label: 'orange', color: '#ffa500' },
  { label: 'brown', color: '#a52a2a' },
  { label: 'grey', color: '#808080' },
];

const ModuleTwo = () => {
  return (
    <div>
      <Section title="Модуль 2 События и состояние. Формы" type="white">
        <Container>
          <Counter initialValue={7} />
          <ColorPicker options={colorPickerOption} />
        </Container>
      </Section>
    </div>
  );
};

export default ModuleTwo;
