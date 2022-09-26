import Personal from "./personal";
import SidebarBlock from "./sidebar-block";

const MainSidebar = () => {
  return (
    <div class="main__sidebar sidebar">
      <Personal name="Сергей Иванов" />
      <SidebarBlock />
    </div>
  );
};

export default MainSidebar;
