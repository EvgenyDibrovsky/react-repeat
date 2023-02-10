import PropTypes from 'prop-types';
import defaulImage from './default-image.jpg';

const Painting = ({
  imageUrl = defaulImage,
  title,
  profileUrl,
  author,
  price,
  quantity,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчиавется' : 'есть в наличии'} </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  profileUrl: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
export default Painting;
