import s from './Box.module.css';

const Box = ({ children }) => {
  return <div className={s.box}>{children}</div>;
};

export default Box;
