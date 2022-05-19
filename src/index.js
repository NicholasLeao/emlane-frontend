import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextComponent } from "./contexts/authContext";
import { ModalContextComponent } from "./contexts/modalContext";
import { LaneContextComponent } from "./contexts/laneContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextComponent>
        <ModalContextComponent>
          <LaneContextComponent>
            <App />
          </LaneContextComponent>
        </ModalContextComponent>
      </AuthContextComponent>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
