const FilterListElement = ({ el, handleClick, checked }) => {
  return (
    <p onClick={handleClick} style={{ color: checked ? "#AD61FF" : undefined }}>
      {el}
    </p>
  );
};

export default FilterListElement;
