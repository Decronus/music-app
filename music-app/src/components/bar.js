import { SkeletonRect } from "./skeleton";
import { useState, useEffect } from "react";
import * as S from ".//styled-components/styled-bar";
import { useRef } from "react";

const Bar = ({ track, author }) => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setisLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const refAudio = useRef(null);

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
    refBarPlayerProgress.current.addEventListener("click", (event) => {
      const clickedBarCoord = event.clientX;
      const windowWidth = window.innerWidth;
      setBarPosition((clickedBarCoord / windowWidth) * 100);
      refAudio.current.currentTime =
        refAudio.current.duration * (clickedBarCoord / windowWidth);
    });
  }, []);

  return (
    <S.Bar>
      <S.BarContent>
        <audio
          src="../audio/zz-top-sharp-dressed-man.mp3"
          controls
          ref={refAudio}
        ></audio>
        <S.BarPlayerProgress ref={refBarPlayerProgress}>
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
                  <use href="../img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>

              {visible && (
                <S.PlayerBtnPlay>
                  <S.PlayerBtnPlaySvg alt="play" onClick={playAudio}>
                    <use href="../img/icon/sprite.svg#icon-play"></use>
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
              )}

              {!visible && (
                <S.PlayerBtnPause>
                  <S.PlayerBtnPauseSvg alt="pause" onClick={pauseAudio}>
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
                  </S.PlayerBtnPauseSvg>
                </S.PlayerBtnPause>
              )}

              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use href="../img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use href="../img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use href="../img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImg>
                  <S.TrackPlaySvg alt="music">
                    {(isLoaded && (
                      <use href="../img/icon/sprite.svg#icon-note"></use>
                    )) || <SkeletonRect width="51px" height="51px" />}
                  </S.TrackPlaySvg>
                </S.TrackPlayImg>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    {(isLoaded && "Sharp Dress...") || (
                      <SkeletonRect width="59px" height="15px" />
                    )}
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    {(isLoaded && "ZZ Top") || (
                      <SkeletonRect width="59px" height="15px" />
                    )}
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use href="../img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use href="../img/icon/sprite.svg#icon-dislike"></use>
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
  );
};

export default Bar;
