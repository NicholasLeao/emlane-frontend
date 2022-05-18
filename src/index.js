import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextComponent } from "./contexts/authContext";
import { ModalContextComponent } from "./contexts/modalContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextComponent>
        <ModalContextComponent>
          <App />
        </ModalContextComponent>
      </AuthContextComponent>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
