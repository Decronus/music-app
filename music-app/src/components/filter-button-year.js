import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

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
          <div className="filter__popup popup__year">
            <div className="radio-group">
              <div className="radio-border">
                <div className="radio-full"></div>
              </div>
              <p>Более новые</p>
            </div>
            <div className="radio-group">
              <div className="radio-border"></div>
              <p>Более старые</p>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default FilterButtonYear;
