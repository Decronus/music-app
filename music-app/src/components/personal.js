import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Personal = ({ name }) => {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">{name || <Skeleton />}</p>
      <div className="sidebar__avatar"></div>
    </div>
  );
};

export default Personal;
