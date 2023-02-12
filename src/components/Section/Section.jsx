import s from './Section.module.css';
import PropTypes from 'prop-types';
import Container from 'components/Container/Container';
const Section = ({ title, children, type }) => {
  return (
    <div className={s[type]}>
      {title && (
        <Container>
          <h1>{title}</h1>
        </Container>
      )}{' '}
      {children}
    </div>
  );
};

Section.propTypes = {
  type: PropTypes.oneOf(['dark', 'white']).isRequired,
};
export default Section;
