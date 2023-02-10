const Select = () => {
  const isOnline = true;
  return (
    <div>
      {isOnline && 'Онлайн'}
      {/* Если єто то рендери это */}

      {isOnline ? 'Онлайн ' : 'Офлайн'}
      {/* это рендери одно, а есле НЕ рендери другое     */}
    </div>
  );
};

export default Select;
