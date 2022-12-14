import ContentPlaylist from "./content-playlist";
import * as S from ".//styled-components/styled-centerblock-content";
import { useThemeContext, themes } from "./context";

const CenterblockContent = ({
  authorFilterList,
  genreFilterList,
  sortedDataList,
  setCurrentTrack,
}) => {
  const { theme } = useThemeContext();

  return (
    <S.CenterblockContent>
      <S.ContentTitle style={{ color: theme.contentTitleColor }}>
        <S.Col01>ТРЕК</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistTitleSvg>
            {theme === themes.dark ? (
              <use href="../img/icon/sprite.svg#icon-watch" />
            ) : (
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6.75098" r="5.5" stroke="#B1B1B1" />
                <path d="M4 6.75098H6.5V3.25098" stroke="#B1B1B1" />
              </svg>
            )}
          </S.PlaylistTitleSvg>
        </S.Col04>
      </S.ContentTitle>

      <ContentPlaylist
        authorFilterList={authorFilterList}
        genreFilterList={genreFilterList}
        sortedDataList={sortedDataList}
        setCurrentTrack={setCurrentTrack}
      />
    </S.CenterblockContent>
  );
};

export default CenterblockContent;
