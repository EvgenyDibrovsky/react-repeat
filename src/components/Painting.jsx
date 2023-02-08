const Painting = ({ imageUrl, title, author, price, quantity }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author.url}>{author.tag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity} заканчиавется или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};
export default Painting;
