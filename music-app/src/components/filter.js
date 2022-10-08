import FilterButton from "./filter-button";
import FilterButtonYear from "./filter-button-year";
import * as S from ".//styled-components/styled-filter";

const authorList = [
  "Michael Jackson",
  "Frank Sinatra",
  "Calvin Harris",
  "Zhu",
  "Arctic Monkeys",
];

const genreList = ["Рок", "Хип-хоп", "Поп-музыка", "Техно", "Инди"];

const Filter = () => {
  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterButton
        text="исполнителю"
        list={authorList.map((el) => {
          return <p key={authorList.indexOf(el)}>{el}</p>;
        })}
      />

      <FilterButtonYear
        text="году выпуска"
        // name="filter__button button-year _btn-text"
      />

      <FilterButton
        text="жанру"
        list={genreList.map((el) => {
          return <p key={genreList.indexOf(el)}>{el}</p>;
        })}
      />
    </S.CenterblockFilter>
  );
};

export default Filter;
