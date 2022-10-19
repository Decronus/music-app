import styled from "styled-components";
import { BtnPointer, BtnText } from "./mixins";

export const FilterButtonWrap = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FilterButtonYearWrap = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: ${({ border }) => border};
  color: ${({ textColor }) => textColor};
  border-radius: 60px;
  padding: 6px 20px;
  ${BtnPointer}
  ${BtnText}
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const RadioBorder = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid #ffffff;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioFull = styled.div`
  width: 11px;
  height: 11px;
  background: #ffffff;
  border-radius: 6px;
`;
