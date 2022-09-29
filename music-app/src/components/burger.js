import MenuList from "./menu-list";
import { useState } from "react";

const Burger = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {visible && (
        <div className="nav__menu menu">
          <MenuList />
        </div>
      )}
    </div>
  );
};

export default Burger;
