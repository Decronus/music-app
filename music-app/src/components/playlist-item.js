import { useState, useEffect } from "react";
import { SkeletonRect } from "./skeleton";

const PlaylistItem = ({ trackName, author, album, time }) => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setisLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              {(isLoaded && (
                <use href="img/icon/sprite.svg#icon-note"></use>
              )) || <SkeletonRect width="51px" height="51px" />}
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {(isLoaded && trackName) || <SkeletonRect />}

              <span className="track__title-span"></span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {(isLoaded && author) || <SkeletonRect width="300px" />}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {(isLoaded && album) || <SkeletonRect width="305px" />}
          </a>
        </div>
        <div className="track__time">
          {(isLoaded && (
            <>
              <svg className="track__time-svg" alt="time">
                <use href="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className="track__time-text">{time}</span>
            </>
          )) || <SkeletonRect width="60px" />}
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
