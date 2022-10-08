import MenuList from "./menu-list";
import { useState } from "react";
import * as S from ".//styled-components/styled-burger";

const Burger = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
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
