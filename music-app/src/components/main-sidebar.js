import Personal from "./personal";
import SidebarBlock from "./sidebar-block";
import * as S from ".//styled-components/styled-main-sidebar";

const MainSidebar = () => {
  return (
    <S.MainSidebar>
      <Personal name="Сергей Иванов" />
      <SidebarBlock />
    </S.MainSidebar>
  );
};

export default MainSidebar;
