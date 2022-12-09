import PlaylistItem from "./playlist-item";
import styled from "styled-components";
import { useGetAllTracksQuery } from "../tracks-api";

const StyledContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ContentPlaylist = () => {
  const { data, error, isLoading } = useGetAllTracksQuery();

  const secInMinSec = (sec) => {
    const minutes = Math.floor(sec / 60);
    let seconds = sec - minutes * 60;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  if (isLoading)
    return <p style={{ opacity: "0.3" }}>Список треков загружается...</p>;
  if (error) return <p style={{ opacity: "0.3" }}>{error}</p>;

  return (
    <StyledContentPlaylist>
      {data?.map((track) => {
        return (
          <PlaylistItem
            id={track.id}
            key={track.id}
            trackName={track.name}
            author={track.author}
            album={track.album}
            time={secInMinSec(track.duration_in_seconds)}
            trackLink={track.track_file}
          />
        );
      })}
    </StyledContentPlaylist>
  );
};

export default ContentPlaylist;
