import ReactDOM from "react-dom/client";
import { ModalProvider } from "./context/modal-context";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/theme-context";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <ThemeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ThemeProvider>
);
