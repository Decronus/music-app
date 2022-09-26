import SidebarItem from "./sidebar-item";

const SidebarBlock = () => {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <SidebarItem link="#" src="../img/playlist01.png" alt="alt" />
        <SidebarItem link="#" src="../img/playlist02.png" alt="alt" />
        <SidebarItem link="#" src="../img/playlist03.png" alt="alt" />
      </div>
    </div>
  );
};

export default SidebarBlock;
