import * as L from "../styled-components/styled-login";
import * as S from "../styled-components/styled-app";
import { Button } from "../styled-components/styled-not-found";
import LogoBlack from "../logo-black";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useThemeContext } from "../context";
import { useGetTokensMutation } from "../../user-api";

export const Login = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const [getTokens, { data, error, isLoading }] = useGetTokensMutation();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const setLoginToken = () => {
    if (login && password) {
      getTokens({
        email: login,
        password: password,
      });
      if (isLoading) console.log("Загрузка");
    } else {
      alert("Заполните все поля");
    }
    if (data) console.log(data);
    // if (!error) {
    //   navigate("/", { replace: true });
    // }
  };

  //   if (isLoading) console.log("Загрузка");
  if (data) {
    // console.log(data.access);
    localStorage.setItem("accessToken", data.access);
    document.cookie = `refresh=${data.refresh}`;
    navigate("/", { replace: true });
  }
  if (error) console.log(error.data.detail);

  //   console.log("cookie", document.cookie);

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
            {/* <Link to="/"> */}
            <Button
              type="submit"
              primary={true}
              marginBottom="20px"
              onClick={setLoginToken}
            >
              Войти
            </Button>
            {/* </Link> */}
            <Link to="/sign-up">
              <Button>Зарегистрироваться</Button>
            </Link>
          </L.FormBackground>
        </L.LoginWrap>
      </S.Container>
    </S.Wrapper>
  );
};
