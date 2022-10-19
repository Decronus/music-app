import * as S from ".//styled-components/styled-menu-item";
import { useThemeContext } from "./context";

const MenuItem = ({ link, text }) => {
  const { theme } = useThemeContext();
  return (
    <S.MenuItem>
      <S.MenuLink href={link} style={{ color: theme.menuLinkColor }}>
        {text}
      </S.MenuLink>
    </S.MenuItem>
  );
};

export default MenuItem;
