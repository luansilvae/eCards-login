import styled from "styled-components";
import { MdLogin } from "react-icons/md";

export const Container = styled.div`
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 30px 30px;

    > span {
      color: #c5ccd9;
      font-size: 14px;
      text-align: center;

      strong {
        margin-left: 5px;
        cursor: pointer;
        color: #fff;
        font-weight: 400;
      }
    }
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 10px;
  }

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    background: #252e41;
    color: #97a5c4;
    padding: 10px 15px;
    border: solid 1px #252e41;
    font-family: "Rubik", sans-serif;

    &::-ms-reveal {
      filter: invert(100%);
    }

    &::placeholder {
      color: #97a5c4;
    }
  }

  span {
    color: #fb5050;
    font-size: 13px;
    margin-top: 5px;
  }
`;

export const SignIcon = styled(MdLogin)`
  width: 20px;
  height: 20px;
  fill: #121721;
`;
