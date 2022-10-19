import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import * as S from ".//styled-components/styled-filter-popup";
import { FilterButtonWrap } from ".//styled-components/styled-filter-button-year";
import { StyledFilterButton } from "./styled-components/styled-filter-button";
import { useThemeContext } from "./context";

const FilterButton = ({ text, name, list }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const { theme } = useThemeContext();

  return (
    <FilterButtonWrap>
      <StyledFilterButton
        className={name}
        onClick={toggleVisibility}
        border={
          visible
            ? theme.activeFilterButtonBorderColor
            : theme.nonActiveFilterButtonBorderColor
        }
        textColor={
          visible
            ? theme.activeFilterButtonTextColor
            : theme.nonActiveFilterButtonTextColor
        }
        hoverBorderColor={theme.hoverBorderColor}
      >
        {text}
      </StyledFilterButton>
      {visible && (
        <ClickAwayListener onClickAway={() => setVisible(false)}>
          <S.FilterPopup style={{ background: theme.mainNavBackgroundColor }}>
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
