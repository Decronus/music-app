const Search = () => {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use href="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};

export default Search;
