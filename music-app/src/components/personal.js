import "react-loading-skeleton/dist/skeleton.css";
import * as S from ".//styled-components/styled-personal";
import { useThemeContext } from "./context";

const Personal = () => {
  const { theme } = useThemeContext();
  return localStorage.getItem("login") ? (
    <S.SidebarPresonal>
      <S.SidebarPersonalName style={{ color: theme.containerColor }}>
        {localStorage.getItem("login")}
      </S.SidebarPersonalName>
      <S.SidebarAvatar
        style={{ backgroundColor: theme.avatarColor }}
      ></S.SidebarAvatar>
    </S.SidebarPresonal>
  ) : undefined;
};

export default Personal;
