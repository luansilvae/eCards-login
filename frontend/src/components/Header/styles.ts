import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121721;

  @media(min-width: 768px) {
    height: 90px;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 1400px;
  padding: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media(min-width: 768px) {
    flex-direction: row;
    padding: 0 20px;
  }
`;

export const Logo = styled.span`
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  font-weight: 500;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const Menu = styled.nav`
 display: flex;
 gap: 20px;
`