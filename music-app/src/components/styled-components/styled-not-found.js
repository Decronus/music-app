import styled from "styled-components";

export const NotFoundWrap = styled.div`
  position: absolute;
  top: calc(50% - 190px);
  left: calc(50% - 190px);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "StratosSkyeng", sans-serif;
`;

export const PageNotFoundWrap = styled.div`
  font-size: 32px;
  line-height: 40px;
  display: flex;
  gap: 8px;
  margin-bottom: 19px;
`;

export const Paragraph404 = styled.p`
  font-size: 160px;
  line-height: 168px;
  margin-bottom: 2px;
`;

export const PageNotFound = styled.p`
  font-size: 32px;
  line-height: 40px;
`;

export const NotFoundDesc = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #4e4e4e;
  width: 280px;
  text-align: center;
  margin-bottom: 36px;
`;

export const Button = styled.button`
  color: ${({ primary }) => (primary ? "white" : "#000000")};
  background: ${({ primary }) => (primary ? "#580EA2" : "none")};
  border: ${({ primary }) => (primary ? "#000000" : "1px solid #D0CECE")};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  width: 278px;
  height: 52px;
  border-radius: 6px;
  font-size: 18px;
  line-height: 24px;
`;
