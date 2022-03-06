import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/images/Logo.svg";
import Button from "../Button";

import { Container, HeaderWrapper, Logo, Menu } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Link to="/">
          <Logo>
            <img src={Icon} alt="Logo eCards" />
            eCards
          </Logo>
        </Link>

        <Menu>
          <Button 
            background="#121721" 
            color="#fff" 
            borderColor="#374562"
          >
            Fazer Login
          </Button>

          <Button 
            background="#fff" 
            color="#121721" 
            borderColor="#fff"
          >
            Começe Agora
          </Button>
        </Menu>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
