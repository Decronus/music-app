import { css } from "styled-components";

export const BtnPointer = css`
  cursor: pointer;
`;

export const BtnIcon = css`
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }

  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`;

export const BtnText = css`
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;
