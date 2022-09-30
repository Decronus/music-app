import { useState, useEffect } from "react";
import { SkeletonRect } from "./skeleton";

const SidebarItem = ({ link, src, alt }) => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setisLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="sidebar__item">
      {(isLoaded && (
        <a className="sidebar__link" href={link}>
          <img className="sidebar__img" src={src} alt={alt} />
        </a>
      )) || <SkeletonRect width="250px" height="150px" />}
    </div>
  );
};

export default SidebarItem;
