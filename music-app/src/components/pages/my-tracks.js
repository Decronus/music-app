import Logo from "../logo";
import Burger from "../burger";
import Search from "../search";
import CenterblockContent from "../centerblock-content";
import MainSidebar from "../main-sidebar";
import Bar from "../bar";

import * as S from "../styled-components/styled-app";

export const MyTracks = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <S.MainNav>
            <S.NavLogo>
              <Logo />
            </S.NavLogo>
            <Burger />
          </S.MainNav>
          <S.MainCenterblock>
            <Search />
            <S.CenterblockH2>Мои треки</S.CenterblockH2>
            <CenterblockContent />
          </S.MainCenterblock>

          <MainSidebar />
        </S.Main>
        <Bar />
      </S.Container>
    </S.Wrapper>
  );
};
