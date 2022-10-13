import Logo from "../logo";
import Burger from "../burger";
import Search from "../search";
import Filter from "../filter";
import CenterblockContent from "../centerblock-content";
import MainSidebar from "../main-sidebar";
import Bar from "../bar";
// import { useParams } from "react-router-dom";

import * as S from "../styled-components/styled-app";

export const Main = () => {
  //   const params = useParams();
  //   console.log(params);

  //   if (params.islogin === "islogin") {
  //     localStorage.setItem("islogin", true);
  //   }

  //   console.log("local", localStorage.getItem("islogin"));

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
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <Filter />
            <CenterblockContent />
          </S.MainCenterblock>

          <MainSidebar />
        </S.Main>
        <Bar />
      </S.Container>
    </S.Wrapper>
  );
};
