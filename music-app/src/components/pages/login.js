import * as L from "../styled-components/styled-login";
import * as S from "../styled-components/styled-app";
import { Button } from "../styled-components/styled-not-found";
import LogoBlack from "../logo-black";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useThemeContext } from "../context";

export const Login = () => {
  localStorage.removeItem("islogin");

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const setLoginToken = () => {
    if (login === "admin" && password === "123") {
      localStorage.setItem("islogin", true);
    } else {
      alert("Неверный логин и/или пароль");
    }
  };

  const { theme } = useThemeContext();
  return (
    <S.Wrapper>
      <S.Container
        style={{
          backgroundColor: theme.containerBackgroundColor,
          color: theme.containerColor,
        }}
      >
        <L.LoginWrap>
          <L.FormBackground>
            <LogoBlack width="140px" />
            <L.LoginForm>
              <L.LoginFormInput
                type="text"
                placeholder="Логин"
                onChange={(event) => setLogin(event.target.value)}
              />
              <L.LoginFormInput
                type="password"
                placeholder="Пароль"
                onChange={(event) => setPassword(event.target.value)}
              />
            </L.LoginForm>
            <Link to="/">
              <Button
                type="submit"
                primary={true}
                marginBottom="20px"
                onClick={setLoginToken}
              >
                Войти
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button>Зарегистрироваться</Button>
            </Link>
          </L.FormBackground>
        </L.LoginWrap>
      </S.Container>
    </S.Wrapper>
  );
};
