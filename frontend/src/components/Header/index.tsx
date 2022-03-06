import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/images/Logo.svg";
import useModal from "../../hooks/useModal";
import Button from "../Button";

import { Container, HeaderWrapper, Logo, Menu } from "./styles";

const Header: React.FC = () => {
  const { showModal } = useModal();

  const handlerShowModal = (title: string, action: string) => {
    showModal({
      title,
      action
    });
  };

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
            onClick={() => handlerShowModal('Fazer Login', 'login')}
          >
            Fazer Login
          </Button>

          <Button
            background="#fff"
            color="#121721"
            borderColor="#fff"
            onClick={() => handlerShowModal('Criar Conta', 'register')}
          >
            Começe Agora
          </Button>
        </Menu>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
