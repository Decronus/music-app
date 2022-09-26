import FilterButton from "./filter-button";

const Filter = () => {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterButton
        text="исполнителю"
        name="filter__button button-author _btn-text"
      />
      <FilterButton
        text="году выпуска"
        name="filter__button button-year _btn-text"
      />
      <FilterButton text="жанру" name="filter__button button-genre _btn-text" />
    </div>
  );
};

export default Filter;
