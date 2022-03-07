import { render } from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthProvider";
import { ModalProvider } from "./contexts/ModalProvider";

render(
  <AuthProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </AuthProvider>,
  document.getElementById("root")
);
