import SidebarItem from "./sidebar-item";
import * as S from ".//styled-components/styled-sidebar-block";

const SidebarBlock = () => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <SidebarItem
          link="/comp/playlist-of-day"
          src="../img/playlist01.png"
          alt="alt"
        />
        <SidebarItem
          link="/comp/dance-hits-100"
          src="../img/playlist02.png"
          alt="alt"
        />
        <SidebarItem link="/comp/indi" src="../img/playlist03.png" alt="alt" />
      </S.SidebarList>
    </S.SidebarBlock>
  );
};

export default SidebarBlock;
