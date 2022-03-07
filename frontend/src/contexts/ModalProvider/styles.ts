import styled, { css, keyframes } from "styled-components";
import { FiTwitch } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
 
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
  overflow-y: auto;
`;

export const Modal = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  background: #121721;
  animation: ${fade} 300ms;

  @media(min-width: 520px) {
    min-height: 0;
    height: auto;
    max-width: 520px;
    margin: 30px auto;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
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

export const SignOptions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 30px 0;
  gap: 30px;

  span { 
    color: #C5CCD9;
    font-size: 14px;
    text-align: center;

    strong { 
      margin-left: 5px;
      cursor: pointer;
      color: #fff;
      font-weight: 400;
    }
  }
`

export const OptionsButtons = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const iconStyle = css`
  width: 20px;
  height: 20px;
`

export const GoogleIcon = styled(FcGoogle)`${iconStyle}`
export const TwitchIcon = styled(FiTwitch)`${iconStyle}`
export const DiscordIcon = styled(FaDiscord)`${iconStyle}`