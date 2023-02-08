import Painting from './Painting';
import paintings from '../data/paintings.json';

export const App = () => {
  return (
    <div>
      <Painting
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        author={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />
      <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        author={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />
      <Painting
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        author={paintings[2].author.tag}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      />

      <Painting
        imageUrl={paintings[3].url}
        title={paintings[3].title}
        author={paintings[3].author.tag}
        profileUrl={paintings[3].author.url}
        price={paintings[3].price}
        quantity={paintings[3].quantity}
      />
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
