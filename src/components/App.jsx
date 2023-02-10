import paintings from '../data/paintings.json';
import PaintingList from './PaintingList';
import IsOnline from './IsOnline';
import ElCollectionMap from './ElCollectionMap';
import Section from './Section';

export const App = () => {
  return (
    <div>
      <Section title="1" />
      <PaintingList paintings={paintings} />
      <Section title="2" />
      <IsOnline />
      <Section title="3" />
      <ElCollectionMap />
    </div>
  );
};