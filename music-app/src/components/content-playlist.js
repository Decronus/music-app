import PlaylistItem from "./playlist-item";
import styled from "styled-components";

const StyledContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ContentPlaylist = () => {
  return (
    <StyledContentPlaylist>
      <PlaylistItem
        trackName="Guilt"
        author="Nero"
        album="Welcome Reality"
        time="4:44"
      />

      <PlaylistItem
        trackName="Elektro"
        author="Dynoro, Outwork, Mr. Gee"
        album="Elektro"
        time="2:22"
      />

      <PlaylistItem
        trackName="I’m Fire"
        author="Ali Bakgor"
        album="I’m Fire"
        time="2:22"
      />
      <PlaylistItem
        trackName="Non Stop"
        author="Стоункат, Psychopath"
        album="Non Stop"
        time="4:12"
      />

      <PlaylistItem
        trackName="Run Run"
        author="Jaded, Will Clarke, AR/CO"
        album="Run Run"
        time="2:54"
      />
    </StyledContentPlaylist>
  );
};

export default ContentPlaylist;
