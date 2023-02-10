const Select = () => {
  const isOnline = false;
  return (
    <div>
      {isOnline && 'Онлайн'}
      {!isOnline && 'Офлайн'}
      {/* Если єто то рендери это */}

      {isOnline ? 'Онлайн ' : 'Офлайн'}
      {/* это рендери одно, а есле НЕ рендери другое     */}
    </div>
  );
};

export default Select;
