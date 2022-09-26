import FilterButton from "./filter-button";

const Filter = () => {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterButton text="исполнителю" />
      <FilterButton text="году выпуска" />
      <FilterButton text="жанру" />
    </div>
  );
};

export default Filter;
