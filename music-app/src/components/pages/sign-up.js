import * as L from "../styled-components/styled-login";
import * as S from "../styled-components/styled-app";
import { Button } from "../styled-components/styled-not-found";
import LogoBlack from "../logo-black";
import { useThemeContext } from "../context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../user-api";

export const SignUp = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  const [signUp] = useSignUpMutation();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [errorVisibility, setErrorVisibility] = useState(false);
  const [errorText, setErrorText] = useState("Неизвестная ошибка");

  const checkForm = (event) => {
    if (!login || !password || !checkPassword) {
      setErrorText("Заполните все поля");
      setErrorVisibility(true);
      return;
    }
    if (checkPassword !== password) {
      setErrorText("Пароли не совпадают");
      setErrorVisibility(true);
      return;
    }
    signUp({
      username: login,
      email: login,
      password: password,
    });
    navigate("/login", { replace: true });
  };

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
              <L.LoginFormInput
                type="password"
                placeholder="Повторите пароль"
                onChange={(event) => setCheckPassword(event.target.value)}
              />
            </L.LoginForm>

            <Button
              type="submit"
              primary={true}
              marginBottom="10px"
              onClick={checkForm}
            >
              Зарегистрироваться
            </Button>
            {errorVisibility && <p style={{ color: "#E12F2F" }}>{errorText}</p>}
          </L.FormBackground>
        </L.LoginWrap>
      </S.Container>
    </S.Wrapper>
  );
};
