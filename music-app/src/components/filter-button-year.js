import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import * as S from ".//styled-components/styled-filter-button-year";
import { FilterPopupYear } from ".//styled-components/styled-filter-popup";
import { useThemeContext } from "./context";

const FilterButtonYear = ({ text, name }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const { theme } = useThemeContext();
  return (
    <S.FilterButtonYearWrap
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
      <div>{text}</div>
      {visible && (
        <ClickAwayListener onClickAway={() => setVisible(false)}>
          <FilterPopupYear
            style={{
              color: theme.containerColor,
              background: theme.mainNavBackgroundColor,
            }}
          >
            <S.RadioGroup>
              <S.RadioBorder
                style={{
                  borderColor: theme.containerColor,
                }}
              >
                <S.RadioFull
                  style={{
                    backgroundColor: theme.containerColor,
                  }}
                ></S.RadioFull>
              </S.RadioBorder>
              <p>Более новые</p>
            </S.RadioGroup>
            <S.RadioGroup>
              <S.RadioBorder
                style={{
                  borderColor: theme.containerColor,
                }}
              ></S.RadioBorder>
              <p>Более старые</p>
            </S.RadioGroup>
          </FilterPopupYear>
        </ClickAwayListener>
      )}
    </S.FilterButtonYearWrap>
  );
};

export default FilterButtonYear;
