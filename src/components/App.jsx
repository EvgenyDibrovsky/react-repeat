import Painting from "./Painting";
import paintings from "../data/paintings.json";


function App() {
  return (
    <div>
      <Painting
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        author={paintings[0].author}
        price={paintings[0].price}
        quantity={paintings[0].uquantityrl}
      />
      <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        author={paintings[1].author}
        price={paintings[1].price}
        quantity={paintings[1].uquantityrl}
      />
      <Painting
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        author={paintings[2].author}
        price={paintings[2].price}
        quantity={paintings[2].uquantityrl}
      />

      <Painting
        imageUrl={paintings[3].url}
        title={paintings[3].title}
        author={paintings[3].author}
        price={paintings[3].price}
        quantity={paintings[3].uquantityrl}
      />
    </div>
  );
}


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
