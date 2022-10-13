import ContentPlaylist from "./content-playlist";
import * as S from ".//styled-components/styled-centerblock-content";

const CenterblockContent = () => {
  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.Col01>ТРЕК</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistTitleSvg>
            <use href="../img/icon/sprite.svg#icon-watch" />
          </S.PlaylistTitleSvg>
        </S.Col04>
      </S.ContentTitle>

      <ContentPlaylist />
    </S.CenterblockContent>
  );
};

export default CenterblockContent;
