const Personal = ({ name }) => {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">{name}</p>
      <div className="sidebar__avatar"></div>
    </div>
  );
};

export default Personal;
