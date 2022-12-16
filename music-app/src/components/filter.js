import FilterButton from "./filter-button";
import FilterButtonYear from "./filter-button-year";
import * as S from ".//styled-components/styled-filter";
import FilterListElement from "./filter-list-element";

const Filter = ({
  authorList,
  genreList,
  authorFilterList,
  genreFilterList,
  changeAuthorFilterList,
  changeGenreFilterList,
  newToOldFilter,
  setNewToOldFilter,
}) => {
  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterButton
        filterList={authorFilterList}
        text="исполнителю"
        list={authorList.map((el) => {
          return (
            <FilterListElement
              key={authorList.indexOf(el)}
              el={el}
              handleClick={changeAuthorFilterList}
              checked={authorFilterList.includes(el) ? true : false}
            />
          );
        })}
      />

      <FilterButtonYear
        text="году выпуска"
        newToOldFilter={newToOldFilter}
        setNewToOldFilter={setNewToOldFilter}
      />

      <FilterButton
        filterList={genreFilterList}
        text="жанру"
        list={genreList.map((el) => {
          return (
            <FilterListElement
              key={genreList.indexOf(el)}
              el={el}
              handleClick={changeGenreFilterList}
              checked={genreFilterList.includes(el) ? true : false}
            />
          );
        })}
      />
    </S.CenterblockFilter>
  );
};

export default Filter;
