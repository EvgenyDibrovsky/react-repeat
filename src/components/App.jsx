import Painting from './PaintingList';
import IsOnline from './IsOnline';
import ElCollectionMap from './ElCollectionMap';
import paintings from '../data/paintings.json';

export const App = () => {
  return (
    <div>
      <h3>№1</h3>
      {paintings.map(painting => (
        <Painting
          key={painting.id}
          imageUrl={painting.url}
          title={painting.title}
          author={painting.author.tag}
          profileUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))}
      <h3>№2</h3>
      <IsOnline />
      <h3>№3</h3>
      <ElCollectionMap />
    </div>
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
