import { useState, useEffect } from "react";
import { SkeletonRect } from "./skeleton";
import * as S from ".//styled-components/styled-sidebar-item";
import { Link } from "react-router-dom";

const SidebarItem = ({ link, src, alt }) => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setisLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <S.SidebarItem>
      <Link to={link}>
        {(isLoaded && (
          <S.SidebarLink>
            <S.SidebarImg src={src} alt={alt} />
          </S.SidebarLink>
        )) || <SkeletonRect width="250px" height="150px" />}
      </Link>
    </S.SidebarItem>
  );
};

export default SidebarItem;
