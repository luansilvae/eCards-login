import React, { HTMLAttributes, useState } from "react";
import { ContextProps } from "../../types/ContextProps";
import { ModalProps } from "../../types/ModalProps";
import ModalContext from "../ModalContext";

import { Container, Modal, ModalHeader, Title, CloseButton, CloseIcon } from './styles'

export const ModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const defaultModalProps: ModalProps = {
    title: "Title",
    action: "register",
    closeModal: () => null,
    autoHide: true,
  };

  const [modalProps, setModalProps] = useState<ModalProps>(defaultModalProps);

  const { title, action, closeModal, autoHide } = modalProps;

  const closeModalHandler = () => {
    if (autoHide) {
      setModalOpen(false);
    }

    closeModal!();
  };

  const modalContextProps: ContextProps = {
    showModal: (props) => {
      setModalProps({ ...modalProps, ...props });
      setModalOpen(true);
    },
    hideModal: () => setModalOpen(false),
  };

  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modal") setModalOpen(false);
  };

  return (
    <ModalContext.Provider value={modalContextProps}>
      {isModalOpen && (
        <Container id="modal" onClick={handleOutsideClick}>
          <Modal>
            <ModalHeader>
              <Title>{title}</Title>
              <CloseButton onClick={closeModalHandler}>
                <CloseIcon />
              </CloseButton>
            </ModalHeader>
            {action === "register" && <strong>Cadastro</strong>}
            {action === "login" && <strong>Login</strong>}
          </Modal>
        </Container>
      )}
      {children}
    </ModalContext.Provider>
  );
};
