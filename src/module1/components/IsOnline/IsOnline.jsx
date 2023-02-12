import PropTypes from 'prop-types';
import Container from '../../../components/Container/Container';

const IsOnline = () => {
  const isOnline = false;
  return (
    <Container>
      <div>
        {isOnline && 'Онлайн'}
        {!isOnline && 'Офлайн'}
        {/* Логическое И */}
        {/* Если єто то рендери это */}

        {isOnline ? 'Онлайн ' : 'Офлайн'}
        {/* Тернарник */}
        {/* это рендери одно, а есле НЕ рендери другое     */}
      </div>
    </Container>
  );
};

IsOnline.propTypes = {
  isOnline: PropTypes.bool,
};

export default IsOnline;
