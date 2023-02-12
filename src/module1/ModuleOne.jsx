import paintings from '../data/paintings.json';
import PaintingList from './components/PaintingList/PaintingList';
import IsOnline from './components/IsOnline/IsOnline';
import ElCollectionMap from './components/ElCollectionMap/ElCollectionMap';
import Section from '../components/Section/Section';
import ColorPicker from './components/ColorPcker/ColorPicker';
import Alert from './components/Alert/Akert';

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

const ModuleOne = () => {
  return (
    <div>
      <Section title="Module - 1" type="dark">
          <PaintingList paintings={paintings} />
          <IsOnline />
          <ElCollectionMap />
          <ColorPicker options={colorPickerOption} />
          <Alert text="Все хорошо!" type="success" />
          <Alert text="Предупреждение!" type="warning" />
          <Alert text="Ошибка!" type="error" />
      </Section>
    </div>
  );
};

export default ModuleOne;
