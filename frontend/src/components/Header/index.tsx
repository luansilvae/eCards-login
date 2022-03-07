import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../assets/images/Logo.svg";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import useModal from "../../hooks/useModal";
import Button from "../Button";

import { Container, HeaderWrapper, Logo, Menu } from "./styles";

const Header: React.FC = () => {
  const { showModal } = useModal();
  const { signOut, authenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderWrapper>
        <Link to="/">
          <Logo>
            <img src={Icon} alt="Logo eCards" />
            eCards
          </Logo>
        </Link>

        {authenticated ? (
          <Menu>
            <Button
              background="#fff"
              color="#121721"
              borderColor="#fff"
              onClick={() => {
                signOut();
                navigate("/");
              }}
            >
              Sair
            </Button>
          </Menu>
        ) : (
          <Menu>
            <Button
              background="#121721"
              color="#fff"
              borderColor="#374562"
              onClick={() =>
                showModal({ title: "Fazer Login", action: "login" })
              }
            >
              Fazer Login
            </Button>

            <Button
              background="#fff"
              color="#121721"
              borderColor="#fff"
              onClick={() =>
                showModal({ title: "Criar Conta", action: "register" })
              }
            >
              Começe Agora
            </Button>
          </Menu>
        )}
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
