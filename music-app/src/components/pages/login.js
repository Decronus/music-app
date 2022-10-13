import * as L from "../styled-components/styled-login";
import * as S from "../styled-components/styled-app";
import { Button } from "../styled-components/styled-not-found";
import LogoBlack from "../logo-black";
import { Link } from "react-router-dom";

export const Login = () => {
  localStorage.removeItem("islogin");
  console.log(localStorage.getItem("islogin"));

  const setLoginToken = () => {
    const login = document.querySelector(".login-form__input-login");
    const pass = document.querySelector(".login-form__input-password");

    if ((login.value === "admin") & (pass.value === "123")) {
      localStorage.setItem("islogin", true);
    } else {
      alert("Неверный логин и/или пароль");
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <L.LoginWrap>
          <L.FormBackground>
            <LogoBlack width="140px" />
            <L.LoginForm>
              <L.LoginFormInput
                className="login-form__input-login"
                type="text"
                placeholder="Логин"
              />
              <L.LoginFormInput
                className="login-form__input-password"
                type="password"
                placeholder="Пароль"
              />
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
              <Button>Зарегистрироваться</Button>
            </L.LoginForm>
          </L.FormBackground>
        </L.LoginWrap>
      </S.Container>
    </S.Wrapper>
  );
};
