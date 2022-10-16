import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import * as S from ".//styled-components/styled-filter-button-year";
import { FilterPopupYear } from ".//styled-components/styled-filter-popup";

const FilterButtonYear = ({ text, name }) => {
  const [visible, setVisible] = useState(false);

  const activeButtonColor = {
    color: "rgba(182, 114, 255, 1)",
    borderColor: "rgba(182, 114, 255, 1)",
  };

  const nonActiveButtonColor = {
    color: "white",
    borderColor: "white",
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <S.FilterButtonYearWrap
      className={name}
      onClick={toggleVisibility}
      style={visible ? activeButtonColor : nonActiveButtonColor}
    >
      <div>{text}</div>
      {visible && (
        <ClickAwayListener onClickAway={() => setVisible(false)}>
          <FilterPopupYear style={{ color: "white" }}>
            <S.RadioGroup>
              <S.RadioBorder>
                <S.RadioFull></S.RadioFull>
              </S.RadioBorder>
              <p>Более новые</p>
            </S.RadioGroup>
            <S.RadioGroup>
              <S.RadioBorder></S.RadioBorder>
              <p>Более старые</p>
            </S.RadioGroup>
          </FilterPopupYear>
        </ClickAwayListener>
      )}
    </S.FilterButtonYearWrap>
  );
};

export default FilterButtonYear;
