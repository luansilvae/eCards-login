import React from "react";
import useModal from "../../hooks/useModal";

import Button from "../Button";
import { Container, InputGroup } from "./styles";

const FormForgotPassword: React.FC = () => {
  const { showModal, hideModal } = useModal();

  return (
    <Container>
      <form>
        <InputGroup>
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Digite seu e-mail" />
        </InputGroup>

        <Button
          background="#fff"
          borderColor="#fff"
          color="#121721"
          onClick={() => {}}
        >
          Redefinir Senha
        </Button>

        <span>
          Lembrou da sua senha?
          <strong
            onClick={() => {
              hideModal();
              showModal({ title: "Login", action: "login" });
            }}
          >
            Entrar Agora
          </strong>
        </span>
      </form>
    </Container>
  );
};

export default FormForgotPassword;
