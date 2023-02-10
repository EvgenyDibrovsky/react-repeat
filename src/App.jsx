import paintings from './data/paintings.json';
import PaintingList from './module1/components/PaintingList';
import IsOnline from './module1/components/IsOnline';
import ElCollectionMap from './module1/components/ElCollectionMap';
import Section from './components/Section';

export const App = () => {
  return (
    <div>
      <Section title="Module 1 ">
        <PaintingList paintings={paintings} />
        <IsOnline />
        <ElCollectionMap />
      </Section>
    </div>
  );
};
