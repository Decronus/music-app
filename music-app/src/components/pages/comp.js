import Logo from "../logo";
import Burger from "../burger";
import Search from "../search";
import CenterblockContent from "../centerblock-content";
import MainSidebar from "../main-sidebar";
import Bar from "../bar";

import * as S from "../styled-components/styled-app";
import { useThemeContext } from "../context";

export const Comp = () => {
  const { theme } = useThemeContext();

  const currentSelectionId = () => {
    switch (window.location.pathname) {
      case "/comp/classic":
        return "Классическая музыка";
      case "/comp/electro":
        return "Электронная музыка";
      case "/comp/rock":
        return "Рок-музыка";
      default:
        return 0;
    }
  };
  return (
    <S.Wrapper>
      <S.Container
        style={{
          backgroundColor: theme.containerBackgroundColor,
          color: theme.containerColor,
        }}
      >
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
            <S.CenterblockH2>{currentSelectionId()}</S.CenterblockH2>
            <CenterblockContent />
          </S.MainCenterblock>

          <MainSidebar />
        </S.Main>
        <Bar />
      </S.Container>
    </S.Wrapper>
  );
};
