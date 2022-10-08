import * as S from ".//styled-components/styled-search";

const Search = () => {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use href="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  );
};

export default Search;
