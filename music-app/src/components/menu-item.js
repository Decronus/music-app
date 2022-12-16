import * as S from ".//styled-components/styled-menu-item";
import { useThemeContext } from "./context";

const MenuItem = ({ text, handleClick }) => {
  const { theme } = useThemeContext();
  return (
    <S.MenuItem>
      <S.MenuLink style={{ color: theme.menuLinkColor }} onClick={handleClick}>
        {text}
      </S.MenuLink>
    </S.MenuItem>
  );
};

export default MenuItem;
