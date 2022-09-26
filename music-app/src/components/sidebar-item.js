const SidebarItem = ({ link, src, alt }) => {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={link}>
        <img className="sidebar__img" src={src} alt={alt} />
      </a>
    </div>
  );
};

export default SidebarItem;
