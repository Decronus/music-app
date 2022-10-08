import styled from "styled-components";

export const CenterblockContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;

export const Col01 = styled(PlaylistTitleCol)`
  width: 447px;
`;

export const Col02 = styled(PlaylistTitleCol)`
  width: 321px;
`;

export const Col03 = styled(PlaylistTitleCol)`
  width: 245px;
`;

export const Col04 = styled(PlaylistTitleCol)`
  width: 60px;
  text-align: end;
`;

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
