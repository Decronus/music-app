import styled from "styled-components";

export const FilterPopup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 34px;
  gap: 10px;
  position: absolute;
  width: 248px;
  height: 305px;
  left: 386px;
  top: 288px;
  background: #313131;
  border-radius: 12px;
  left: 0;
  top: 49px;
  overflow: scroll;
`;

export const FilterPopupYear = styled(FilterPopup)`
  width: 403px;
  max-height: 92px;
  display: flex;
  justify-content: center;

  gap: 25px;
  padding: 34px;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 24px;
`;

export const PopupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  font-size: 20px;
  line-height: 24px;
  & p {
    cursor: pointer;
    &:hover {
      color: #d9b6ff;
    }
  }
  //   p:first-child {
  //     text-decoration-line: underline;
  //     color: #b672ff;
  //   }
`;

export const ScrollWrap = styled.div`
  width: 4px;
  height: 237px;
  background: #4b4949;
  border-radius: 10px;
  position: relative;
`;

export const Scroll = styled.div`
  position: absolute;
  width: 4px;
  height: 65px;
  background: #ffffff;
  border-radius: 10px;
  top: 0;
`;

export const FilterCounter = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #ad61ff;
  top: -8px;
  right: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
