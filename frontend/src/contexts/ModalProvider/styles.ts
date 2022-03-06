import styled, { keyframes } from "styled-components";

import { VscClose } from "react-icons/vsc";

const fade = keyframes`
  from {
    opacity: 0;
    transform: translateY(40%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  transition: animation 200ms ease-in;
  width: 100%;
  margin: 0 20px;
  background: #121721;
  animation: ${fade} 300ms;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: solid 1px #374562;
`;
export const Title = styled.h2`
  font-size: 17px;
  color: #fff;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 200ms ease-in-out;

  :hover {
    filter: brightness(95%);
  }
`;

export const CloseIcon = styled(VscClose)`
  fill: #121721;
  width: 28px;
  height: 28px;
`;