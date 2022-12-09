import { useState, useEffect } from "react";
import { SkeletonRect } from "./skeleton";
import * as S from ".//styled-components/styled-playlist-item";
import { useThemeContext, themes } from "./context";
import iconNoteLight from "../img/icon/icon-note-light.png";
import {
  useFavAllQuery,
  useAddToFavMutation,
  useDeleteFavMutation,
} from "../tracks-api";

const PlaylistItem = ({ id, trackName, author, album, time, trackLink }) => {
  const [isLoaded, setisLoaded] = useState(false);
  const { data, error, isLoading } = useFavAllQuery();
  const isFav = () => {
    if (data) {
      for (let obj of Object.values(data)) {
        if (obj.id === id) {
          return true;
        }
      }
    }
  };
  const [addToFav] = useAddToFavMutation();
  const [deleteFav] = useDeleteFavMutation();

  const toggleFavorite = (id) => {
    isFav() ? deleteFav(id) : addToFav(id);
  };

  useEffect(() => {
    const timer = setTimeout(() => setisLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const { theme } = useThemeContext();
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <a href={trackLink}>
            <S.TrackTitleImage>
              {theme === themes.dark ? (
                <S.TrackTitleSvg alt="music">
                  {(isLoaded && (
                    <use href="../img/icon/sprite.svg#icon-note"></use>
                  )) || <SkeletonRect width="51px" height="51px" />}
                </S.TrackTitleSvg>
              ) : (
                <img src={`${iconNoteLight}`} alt="icon-note" />
              )}
            </S.TrackTitleImage>
          </a>
          <S.TrackTitleText>
            <S.TrackTitleLink style={{ color: theme.containerColor }}>
              {(isLoaded && trackName) || <SkeletonRect />}
              <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="#" style={{ color: theme.containerColor }}>
            {(isLoaded && author) || <SkeletonRect width="300px" />}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="#">
            {(isLoaded && album) || <SkeletonRect width="305px" />}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          {(isLoaded && (
            <>
              <S.TrackTimeSvg alt="time" onClick={() => toggleFavorite(id)}>
                {isFav() ? (
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z"
                      fill="#696969"
                    />
                    <path
                      d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052"
                      stroke="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052"
                      stroke="#696969"
                    />
                  </svg>
                )}
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
