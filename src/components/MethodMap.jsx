const MethodMap = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(el => (
        <div>{el}</div>
      ))}
      <ul>
        {['EN', 'PL', 'UK'].map(el => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default MethodMap;
