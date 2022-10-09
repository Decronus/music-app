import Logo from "./components/logo";
import Burger from "./components/burger";
import Search from "./components/search";
import Filter from "./components/filter";
import CenterblockContent from "./components/centerblock-content";
import MainSidebar from "./components/main-sidebar";

import * as S from "./components/styled-components/styled-app";
import GlobalStyles from "./components/styled-components/global-styles";
import Bar from "./components/bar";

function App() {
  return (
    <>
      <GlobalStyles />
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
              <S.CenterblockH2>Треки</S.CenterblockH2>
              <Filter />
              <CenterblockContent />
            </S.MainCenterblock>

            <MainSidebar />
          </S.Main>
          <Bar />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
