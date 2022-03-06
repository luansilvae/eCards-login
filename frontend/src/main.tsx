import { render } from "react-dom";
import App from "./App";
import { ModalProvider } from "./contexts/ModalProvider";

render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById("root")
);
