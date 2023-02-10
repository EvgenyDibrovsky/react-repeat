const IsOnline = () => {
  const isOnline = false;
  return (
    <div>
      {isOnline && 'Онлайн'}
      {!isOnline && 'Офлайн'}
      {/* Логическое И */}
      {/* Если єто то рендери это */}

      {isOnline ? 'Онлайн ' : 'Офлайн'}
      {/* Тернарник */}
      {/* это рендери одно, а есле НЕ рендери другое     */}
    </div>
  );
};

export default IsOnline;
