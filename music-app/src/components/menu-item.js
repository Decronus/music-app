const MenuItem = (props) => {
  return (
    <li className="menu__item">
      <a href={props.link} className="menu__link">
        {props.text}
      </a>
    </li>
  );
};

export default MenuItem;
