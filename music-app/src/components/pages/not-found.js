import Logo from "../logo";
import Burger from "../burger";
import Search from "../search";
import Bar from "../bar";

import * as S from "../styled-components/styled-app";
import { NotFoundComponent } from "../not-found";
import { useThemeContext } from "../context";

export const NotFound = () => {
  const { theme } = useThemeContext();
  return (
    <S.Wrapper>
      <S.Container
        style={{
          backgroundColor: theme.containerBackgroundColor,
          color: theme.containerColor,
        }}
      >
        <NotFoundComponent />
        <S.Main>
          <S.MainNav
            style={{
              backgroundColor: theme.mainNavBackgroundColor,
            }}
          >
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
