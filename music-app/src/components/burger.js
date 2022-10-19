import MenuList from "./menu-list";
import { useState } from "react";
import * as S from ".//styled-components/styled-burger";
import { themes, useThemeContext } from "./context";

const Burger = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const { theme } = useThemeContext();

  return (
    <div>
      <S.NavBurger onClick={toggleVisibility}>
        {theme === themes.dark ? (
          <svg
            width="21"
            height="12"
            viewBox="0 0 21 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.0576 0.754883H0.0576172" stroke="#D3D3D3" />
            <path d="M20.0576 5.75488H0.0576172" stroke="#D3D3D3" />
            <path d="M20.0576 10.7549H0.0576172" stroke="#D3D3D3" />
          </svg>
        ) : (
          <svg
            width="21"
            height="12"
            viewBox="0 0 21 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.0576 0.875H0.0576172" stroke="black" />
            <path d="M20.0576 5.875H0.0576172" stroke="black" />
            <path d="M20.0576 10.875H0.0576172" stroke="black" />
          </svg>
        )}
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <MenuList />
        </S.NavMenu>
      )}
    </div>
  );
};

export default Burger;
