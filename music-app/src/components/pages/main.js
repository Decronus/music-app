import Logo from "../logo";
import Burger from "../burger";
import Search from "../search";
import Filter from "../filter";
import CenterblockContent from "../centerblock-content";
import MainSidebar from "../main-sidebar";
import Bar from "../bar";
import { useThemeContext } from "../context";
import { useState, useEffect } from "react";
import { useGetAllTracksQuery } from "../../tracks-api";
import * as S from "../styled-components/styled-app";

export const Main = () => {
  const { theme } = useThemeContext();

  const { data: allData } = useGetAllTracksQuery();

  const [sortedDataList, setSortedDataList] = useState([]);

  const [authorFilterList, setAuthorFilterList] = useState([]);
  const changeAuthorFilterList = (event) => {
    if (authorFilterList.includes(event.target.textContent)) {
      setAuthorFilterList(
        authorFilterList.filter((el) => {
          return el !== event.target.textContent;
        })
      );
    } else {
      setAuthorFilterList([...authorFilterList, event.target.textContent]);
    }
  };

  const [newToOldFilter, setNewToOldFilter] = useState(true);

  const [genreFilterList, setGenreFilterList] = useState([]);
  const changeGenreFilterList = (event) => {
    if (genreFilterList.includes(event.target.textContent)) {
      setGenreFilterList(
        genreFilterList.filter((el) => {
          return el !== event.target.textContent;
        })
      );
    } else {
      setGenreFilterList([...genreFilterList, event.target.textContent]);
    }
  };

  const authorList = [];
  const genreList = [];
  let dataList = [];

  const deleteSymbols = (str) => {
    if (str === null) return;
    return str.replaceAll("-", "");
  };

  if (allData) {
    dataList = [...allData];
    if (newToOldFilter) {
      dataList = dataList.sort(
        (prev, next) =>
          deleteSymbols(next.release_date) - deleteSymbols(prev.release_date)
      );
    } else if (!newToOldFilter) {
      dataList = dataList.sort(
        (prev, next) =>
          deleteSymbols(prev.release_date) - deleteSymbols(next.release_date)
      );
    }
  }

  useEffect(() => {
    setSortedDataList([...dataList]);
  }, [dataList]);

  if (sortedDataList) {
    sortedDataList.forEach((track) => {
      if (authorList.includes(track.author)) {
        return;
      } else {
        if (track.author !== "-") {
          authorList.push(track.author);
        } else {
          if (authorList.includes("other")) {
            return;
          } else {
            authorList.push("other");
          }
        }
      }
    });
    sortedDataList.forEach((track) => {
      if (genreList.includes(track.genre)) {
        return;
      } else {
        genreList.push(track.genre);
      }
    });
  }

  const [currentTrack, setCurrentTrack] = useState(undefined);
  //   const playingCurrentTrack = () => {
  //     setCurrentTrack(trackLink);
  //     console.log(currentTrack);
  //   };
  //   console.log(currentTrack);

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
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <Filter
              authorList={authorList}
              genreList={genreList}
              authorFilterList={authorFilterList}
              genreFilterList={genreFilterList}
              setAuthorFilterList={setAuthorFilterList}
              changeAuthorFilterList={changeAuthorFilterList}
              changeGenreFilterList={changeGenreFilterList}
              newToOldFilter={newToOldFilter}
              setNewToOldFilter={setNewToOldFilter}
            />
            <CenterblockContent
              sortedDataList={sortedDataList}
              authorFilterList={authorFilterList}
              genreFilterList={genreFilterList}
              setCurrentTrack={setCurrentTrack}
            />
          </S.MainCenterblock>

          <MainSidebar />
        </S.Main>
        <Bar currentTrack={currentTrack} />
      </S.Container>
    </S.Wrapper>
  );
};
