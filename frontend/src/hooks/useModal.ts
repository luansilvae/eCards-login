import { useContext } from "react";
import ModalContext from "../contexts/ModalContext";

function useModal() {
  const { showModal, hideModal } = useContext(ModalContext);

 return { showModal, hideModal }
}

export default useModal;
