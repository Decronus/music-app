import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

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
    <div className="filter__button-wrap">
      <div
        className={name}
        onClick={toggleVisibility}
        style={visible ? activeButtonColor : nonActiveButtonColor}
      >
        {text}
      </div>
      {visible && (
        <ClickAwayListener onClickAway={() => setVisible(false)}>
          <div className="filter__popup">
            <div className="popup__list">{list}</div>
            <div className="scroll__wrap">
              <div className="scroll"></div>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default FilterButton;
