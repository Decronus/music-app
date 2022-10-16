import MenuItem from "./menu-item";
import * as S from ".//styled-components/style-menu-list";
import { Link } from "react-router-dom";

const MenuList = () => {
  const isLogin = localStorage.getItem("islogin");

  return (
    <S.MenuList>
      <Link to="/">
        <MenuItem link="http://" text="Главное" />
      </Link>
      <Link to="/my-tracks">
        <MenuItem link="http://" text="Мои треки" />
      </Link>
      <Link to="/login">
        <MenuItem link="http://" text={isLogin ? "Выйти" : "Войти"} />
      </Link>
    </S.MenuList>
  );
};

export default MenuList;
