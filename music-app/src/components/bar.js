import { SkeletonRect } from "./skeleton";
import { useState, useEffect } from "react";
import * as S from ".//styled-components/styled-bar";
import { useRef } from "react";
import { useThemeContext, themes } from "./context";
import iconNoteLight from "../img/icon/icon-note-light.png";

const Bar = ({ currentTrack }) => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setisLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const refAudio = useRef(null);
  const refPlayButton = useRef(null);

  const playAudio = () => {
    refAudio.current.play();
    changePlayOnPause();
    intervalFillBarPosition();
  };

  const pauseAudio = () => {
    refAudio.current.pause();
    changePlayOnPause();
  };

  const [visible, setVisible] = useState(true);

  const changePlayOnPause = () => {
    setVisible(!visible);
  };

  const [barPosition, setBarPosition] = useState(0);

  const fillBarPosition = () => {
    const currentTime = refAudio.current.currentTime;
    const duration = refAudio.current.duration;
    setBarPosition((currentTime / duration) * 100);
  };

  const intervalFillBarPosition = () => {
    setInterval(fillBarPosition, 100);
  };

  const refBarPlayerProgress = useRef(null);

  useEffect(() => {
    refBarPlayerProgress.current?.addEventListener("click", (event) => {
      const clickedBarCoord = event.clientX;
      const windowWidth = window.innerWidth;
      setBarPosition((clickedBarCoord / windowWidth) * 100);
      refAudio.current.currentTime =
        refAudio.current.duration * (clickedBarCoord / windowWidth);
    });
  }, []);

  const { theme } = useThemeContext();

  if (currentTrack) {
    setTimeout(() => {
      playAudio();
    }, 10);
  }

  return (
    currentTrack && (
      <S.Bar
        style={{
          backgroundColor: theme.containerBackgroundColor,
        }}
      >
        <S.BarContent>
          <audio src={currentTrack} controls ref={refAudio}></audio>
          <S.BarPlayerProgress
            ref={refBarPlayerProgress}
            style={{ background: theme.barPlayerProgressColor }}
          >
            <S.FillBarPlayerProgress
              style={{
                width: `${barPosition}%`,
              }}
            ></S.FillBarPlayerProgress>
          </S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev">
                    {theme === themes.dark ? (
                      <use href="../img/icon/sprite.svg#icon-prev"></use>
                    ) : (
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 2V12.5" stroke="#B1B1B1" />
                        <path
                          d="M3 7L12.75 0.937823L12.75 13.0622L3 7Z"
                          fill="#B1B1B1"
                        />
                      </svg>
                    )}
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>

                {visible && (
                  <S.PlayerBtnPlay>
                    <S.PlayerBtnPlaySvg
                      alt="play"
                      ref={refPlayButton}
                      onClick={playAudio}
                    >
                      {theme === themes.dark ? (
                        <use href="../img/icon/sprite.svg#icon-play"></use>
                      ) : (
                        <svg
                          width="15"
                          height="20"
                          viewBox="0 0 15 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z"
                            fill="#B1B1B1"
                          />
                        </svg>
                      )}
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                )}

                {!visible && (
                  <S.PlayerBtnPause>
                    <S.PlayerBtnPauseSvg alt="pause" onClick={pauseAudio}>
                      {theme === themes.dark ? (
                        <svg
                          width="15"
                          height="19"
                          viewBox="0 0 15 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="5" height="19" fill="#D9D9D9" />
                          <rect x="10" width="5" height="19" fill="#D9D9D9" />
                        </svg>
                      ) : (
                        <svg
                          width="15"
                          height="19"
                          viewBox="0 0 15 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="5" height="19" fill="#B1B1B1" />
                          <rect x="10" width="5" height="19" fill="#B1B1B1" />
                        </svg>
                      )}
                    </S.PlayerBtnPauseSvg>
                  </S.PlayerBtnPause>
                )}

                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next">
                    {theme === themes.dark ? (
                      <use href="../img/icon/sprite.svg#icon-next"></use>
                    ) : (
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 2V12.5" stroke="#B1B1B1" />
                        <path
                          d="M13 7L3.25 0.937823L3.25 13.0622L13 7Z"
                          fill="#B1B1B1"
                        />
                      </svg>
                    )}
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat>
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    {theme === themes.dark ? (
                      <use href="../img/icon/sprite.svg#icon-repeat"></use>
                    ) : (
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                          fill="#B1B1B1"
                        />
                        <path
                          d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                          fill="#B1B1B1"
                        />
                      </svg>
                    )}
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle>
                  <S.PlayerBtnShuffleSvg alt="shuffle">
                    {theme === themes.dark ? (
                      <use href="../img/icon/sprite.svg#icon-shuffle"></use>
                    ) : (
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5 15L14.5 12.1132V17.8868L19.5 15ZM10.1632 12.0833L9.70863 12.2916L10.1632 12.0833ZM7.33683 5.91673L6.8823 6.12505L7.33683 5.91673ZM0.5 3.5H2.79151V2.5H0.5V3.5ZM6.8823 6.12505L9.70863 12.2916L10.6177 11.8749L7.79137 5.7084L6.8823 6.12505ZM14.7085 15.5H15V14.5H14.7085V15.5ZM9.70863 12.2916C10.6047 14.2466 12.5579 15.5 14.7085 15.5V14.5C12.949 14.5 11.3508 13.4745 10.6177 11.8749L9.70863 12.2916ZM2.79151 3.5C4.55105 3.5 6.14918 4.52552 6.8823 6.12505L7.79137 5.7084C6.89533 3.75341 4.94205 2.5 2.79151 2.5V3.5Z"
                          fill="#B1B1B1"
                        />
                        <path
                          d="M19.5 3L14.5 5.88675V0.113249L19.5 3ZM10.1632 5.91673L9.70863 5.7084L10.1632 5.91673ZM7.33683 12.0833L6.8823 11.8749L7.33683 12.0833ZM0.5 14.5H2.79151V15.5H0.5V14.5ZM6.8823 11.8749L9.70863 5.7084L10.6177 6.12505L7.79137 12.2916L6.8823 11.8749ZM14.7085 2.5H15V3.5H14.7085V2.5ZM9.70863 5.7084C10.6047 3.75341 12.5579 2.5 14.7085 2.5V3.5C12.949 3.5 11.3508 4.52552 10.6177 6.12505L9.70863 5.7084ZM2.79151 14.5C4.55105 14.5 6.14918 13.4745 6.8823 11.8749L7.79137 12.2916C6.89533 14.2466 4.94205 15.5 2.79151 15.5V14.5Z"
                          fill="#B1B1B1"
                        />
                      </svg>
                    )}
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImg>
                    {theme === themes.dark ? (
                      <S.TrackPlaySvg alt="music">
                        {(isLoaded && (
                          <use href="../img/icon/sprite.svg#icon-note"></use>
                        )) || <SkeletonRect width="51px" height="51px" />}
                      </S.TrackPlaySvg>
                    ) : (
                      <img src={`${iconNoteLight}`} alt="icon-note" />
                    )}
                  </S.TrackPlayImg>
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink
                      href="http://"
                      style={{ color: theme.containerColor }}
                    >
                      {(isLoaded && "Sharp Dress...") || (
                        <SkeletonRect width="59px" height="15px" />
                      )}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink
                      href="http://"
                      style={{ color: theme.containerColor }}
                    >
                      {(isLoaded && "ZZ Top") || (
                        <SkeletonRect width="59px" height="15px" />
                      )}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg alt="like">
                      {theme === themes.dark ? (
                        <use href="../img/icon/sprite.svg#icon-like"></use>
                      ) : (
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
                            stroke="#B1B1B1"
                          />
                        </svg>
                      )}
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <S.TrackPlayDislikeSvg alt="dislike">
                      {theme === themes.dark ? (
                        <use href="../img/icon/sprite.svg#icon-dislike"></use>
                      ) : (
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1 1L15 13.5" stroke="#B1B1B1" />
                          <path
                            d="M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378"
                            stroke="#B1B1B1"
                          />
                        </svg>
                      )}
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use href="../img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <S.VolumeProgressLine
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    )
  );
};

export default Bar;
