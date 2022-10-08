import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import * as S from ".//styled-components/styled-filter-popup";
import { FilterButtonWrap } from ".//styled-components/styled-filter-button-year";
import { StyledFilterButton } from "./styled-components/styled-filter-button";

const FilterButton = ({ text, name, list }) => {
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
    <FilterButtonWrap>
      <StyledFilterButton
        className={name}
        onClick={toggleVisibility}
        style={visible ? activeButtonColor : nonActiveButtonColor}
      >
        {text}
      </StyledFilterButton>
      {visible && (
        <ClickAwayListener onClickAway={() => setVisible(false)}>
          <S.FilterPopup>
            <S.PopupList>{list}</S.PopupList>
            <S.ScrollWrap>
              <S.Scroll></S.Scroll>
            </S.ScrollWrap>
          </S.FilterPopup>
        </ClickAwayListener>
      )}
    </FilterButtonWrap>
  );
};

export default FilterButton;
