import MenuItem from "./menu-item";

const MenuList = () => {
  return (
    <div className="menu__list">
      <MenuItem link="http://" text="Главное" />;
      <MenuItem link="http://" text="Мой плейлист" />;
      <MenuItem link="http://" text="Войти" />;
    </div>
  );
};

export default MenuList;
