import "react-loading-skeleton/dist/skeleton.css";
import * as S from ".//styled-components/styled-personal";
import { useThemeContext } from "./context";

const Personal = ({ name }) => {
  const { theme } = useThemeContext();
  return (
    <S.SidebarPresonal>
      <S.SidebarPersonalName style={{ color: theme.containerColor }}>
        {name}
      </S.SidebarPersonalName>
      <S.SidebarAvatar
        style={{ backgroundColor: theme.avatarColor }}
      ></S.SidebarAvatar>
    </S.SidebarPresonal>
  );
};

export default Personal;
