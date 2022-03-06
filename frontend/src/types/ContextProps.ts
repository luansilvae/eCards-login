import { ModalProps } from "./ModalProps";

export interface ContextProps {
  showModal: (modalProps: ModalProps) => void;
  hideModal: () => void;
}