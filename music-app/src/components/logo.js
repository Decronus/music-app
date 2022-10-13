import * as S from ".//styled-components/styled-logo-image";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <S.LogoImage src={logo} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
