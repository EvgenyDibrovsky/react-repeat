const ElCollectionMap = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((el, index) => (
        <div key={index}>{el}</div>
      ))}
      <ul>
        {['EN', 'PL', 'UK'].map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default ElCollectionMap;
