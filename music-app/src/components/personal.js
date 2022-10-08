import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from ".//styled-components/styled-personal";

const Personal = ({ name }) => {
  return (
    <S.SidebarPresonal>
      <S.SidebarPersonalName>{name || <Skeleton />}</S.SidebarPersonalName>
      <S.SidebarAvatar></S.SidebarAvatar>
    </S.SidebarPresonal>
  );
};

export default Personal;
