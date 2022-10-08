import MenuItem from "./menu-item";
import * as S from ".//styled-components/style-menu-list";

const MenuList = () => {
  return (
    <S.MenuList>
      <MenuItem link="http://" text="Главное" />
      <MenuItem link="http://" text="Мои треки" />
      <MenuItem link="http://" text="Войти" />
    </S.MenuList>
  );
};

export default MenuList;
