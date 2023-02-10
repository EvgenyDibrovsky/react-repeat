import paintings from '../data/paintings.json';
import PaintingList from './components/PaintingList/PaintingList';
import IsOnline from './components/IsOnline/IsOnline';
import ElCollectionMap from './components/ElCollectionMap/ElCollectionMap';
import Section from '../components/Section';
import ColorPicker from 'module1/components/ColorPcker/ColorPicker';

const ModuleOne = () => {
  return (
    <div>
      <Section title="Module 1 ">
        <PaintingList paintings={paintings} />
        <IsOnline />
        <ElCollectionMap />
        <ColorPicker />
      </Section>
    </div>
  );
};

export default ModuleOne;
