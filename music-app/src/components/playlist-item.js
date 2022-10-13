import { useState, useEffect } from "react";
import { SkeletonRect } from "./skeleton";
import * as S from ".//styled-components/styled-playlist-item";

const PlaylistItem = ({ trackName, author, album, time }) => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setisLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              {(isLoaded && (
                <use href="../img/icon/sprite.svg#icon-note"></use>
              )) || <SkeletonRect width="51px" height="51px" />}
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink>
              {(isLoaded && trackName) || <SkeletonRect />}
              <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">
            {(isLoaded && author) || <SkeletonRect width="300px" />}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">
            {(isLoaded && album) || <SkeletonRect width="305px" />}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          {(isLoaded && (
            <>
              <S.TrackTimeSvg alt="time">
                <use href="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>{time}</S.TrackTimeText>
            </>
          )) || <SkeletonRect width="60px" />}
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};

export default PlaylistItem;
