import ContentPlaylist from "./content-playlist";

const CenterblockContent = () => {
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlink:href="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>

      <ContentPlaylist />
    </div>
  );
};

export default CenterblockContent;
