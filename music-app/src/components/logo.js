import * as S from ".//styled-components/styled-logo-image";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import logoBlack from "../img/logo-black.png";
import { themes, useThemeContext } from "./context";

const Logo = () => {
  const { theme } = useThemeContext();
  return (
    <>
      <Link to="/">
        <S.LogoImage
          src={theme === themes.dark ? `${logo}` : `${logoBlack}`}
          alt="logo"
        />
      </Link>
    </>
  );
};

export default Logo;
