import styled from "styled-components";
import { BtnText } from "./mixins";

export const StyledFilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: ${({ border }) => border};
  color: ${({ textColor }) => textColor};
  border-radius: 60px;
  padding: 6px 20px;
  ${BtnText}
`;
