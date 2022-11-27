import styled from "styled-components";

export const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBackground = styled.div`
  width: 366px;
  height: 439px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-top: 43px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 38px;
  margin-top: 42px;
  margin-bottom: 60px;
`;

export const LoginFormInput = styled.input`
  width: 276px;
  height: 30px;
  border: 0;
  border-bottom: 1px solid #d0cece;
  outline: none;
  &::placeholder {
    font-size: 18px;
    letter-spacing: -0.05px;
    color: #e1e1e1;
  }
  //   &:first-child {
  //     margin-bottom: 38px;
  //     margin-top: 42px;
  //   }
  //   &:nth-child(2) {
  //     margin-bottom: 60px;
  //   }
`;
