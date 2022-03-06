import styled from "styled-components";
import { ButtonProps } from "../../types/ButtonProps";

export const Container = styled.button<ButtonProps>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 10px 15px;
  border: solid 1px ${(props) => props.borderColor};
  cursor: pointer;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:disabled {
    background: #8996B4;
    border-color:#8996B4;
    color: #121721;
    cursor: default;
  }
`;
