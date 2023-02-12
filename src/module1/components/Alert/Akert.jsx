import s from './Alert.module.css';

const Alert = ({ text }) => {
  return (
    <p role="alert" className={s.Alert}>
      {text}
    </p>
  );
};

// Painting.propTypes = {

// };
export default Alert;
