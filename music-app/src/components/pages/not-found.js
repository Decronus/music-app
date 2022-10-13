import Logo from "../logo";
import Burger from "../burger";
import Search from "../search";
import Bar from "../bar";

import * as S from "../styled-components/styled-app";
import { NotFoundComponent } from "../not-found";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <NotFoundComponent />
        <S.Main>
          <S.MainNav>
            <S.NavLogo>
              <Logo />
            </S.NavLogo>
            <Burger />
          </S.MainNav>
          <S.MainCenterblock>
            <Search />
          </S.MainCenterblock>
        </S.Main>
        <Bar />
      </S.Container>
    </S.Wrapper>
  );
};
