import * as S from "./styled-components/styled-not-found";
import { Link } from "react-router-dom";

export const NotFoundComponent = () => {
  return (
    <S.NotFoundWrap>
      <S.Paragraph404>404</S.Paragraph404>
      <S.PageNotFoundWrap>
        <S.PageNotFound>Страница не найдена</S.PageNotFound>
        <img src="./img/smiles/smile_crying.png" alt="crying" />
      </S.PageNotFoundWrap>
      <S.NotFoundDesc>
        Возможно, она была удалена или перенесена на другой адрес
      </S.NotFoundDesc>
      <Link to="/">
        <S.Button primary={true}>Вернуться на главную</S.Button>
      </Link>
    </S.NotFoundWrap>
  );
};
