import * as S from ".//styled-components/styled-menu-item";

const MenuItem = ({ link, text }) => {
  return (
    <S.MenuItem>
      <S.MenuLink href={link}>{text}</S.MenuLink>
    </S.MenuItem>
  );
};

export default MenuItem;
