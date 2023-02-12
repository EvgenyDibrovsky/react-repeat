import PropTypes from 'prop-types';
import Container from '../../../components/Container/Container';

const ElCollectionMap = () => {
  return (
    <Container>
      <div>
        <ul>
          {' '}
          {[1, 2, 3, 4, 5].map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>

        <ul>
          {['EN', 'PL', 'UK'].map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
ElCollectionMap.prototypes = {
  children: PropTypes.node,
};
export default ElCollectionMap;
