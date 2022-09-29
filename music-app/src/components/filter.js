import FilterButton from "./filter-button";
import FilterButtonYear from "./filter-button-year";

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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterButton
        text="исполнителю"
        name="filter__button button-author _btn-text"
        list={authorList.map((el) => {
          return <p key={authorList.indexOf(el)}>{el}</p>;
        })}
      />

      <FilterButtonYear
        text="году выпуска"
        name="filter__button button-year _btn-text"
      />

      <FilterButton
        text="жанру"
        name="filter__button button-genre _btn-text"
        list={genreList.map((el) => {
          return <p key={genreList.indexOf(el)}>{el}</p>;
        })}
      />
    </div>
  );
};

export default Filter;
