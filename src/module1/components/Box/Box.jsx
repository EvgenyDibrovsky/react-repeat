import PropTypes from 'prop-types';
import s from './Box.module.css';

const Box = ({ type, classNames = '' }) => {
  return <div className={`${s[type]}  ${classNames}`}>Box</div>;
};

Box.propeTypes = {
  type: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};
export default Box;
