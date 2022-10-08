import SidebarItem from "./sidebar-item";
import * as S from ".//styled-components/styled-sidebar-block";

const SidebarBlock = () => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <SidebarItem link="#" src="../img/playlist01.png" alt="alt" />
        <SidebarItem link="#" src="../img/playlist02.png" alt="alt" />
        <SidebarItem link="#" src="../img/playlist03.png" alt="alt" />
      </S.SidebarList>
    </S.SidebarBlock>
  );
};

export default SidebarBlock;
