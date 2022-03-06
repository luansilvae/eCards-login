import { createContext } from "react";
import { ContextProps } from "../types/ContextProps";

const defaultValue: ContextProps = {
  showModal: () => {
    throw new Error("showModal must be defined.");
  },
  hideModal: () => {
    throw new Error("hideModal must be defined.");
  }
};

const ModalContext = createContext(defaultValue);

export default ModalContext;