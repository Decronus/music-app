import MenuItem from "./menu-item";

const MenuList = () => {
  return (
    <ul className="menu__list">
      <MenuItem link="http://" text="Главное" />
      <MenuItem link="http://" text="Мои треки" />
      <MenuItem link="http://" text="Войти" />
    </ul>
  );
};

export default MenuList;
