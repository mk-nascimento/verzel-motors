import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AuthProvider from "./context/Auth/index.tsx";
import VehicleProvider from "./context/Vehicles/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VehicleProvider>
          <App />
        </VehicleProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
