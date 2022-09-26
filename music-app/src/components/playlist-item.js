const PlaylistItem = (props) => {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlink:href="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {props.trackName} <span className="track__title-span"></span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlink:href="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
