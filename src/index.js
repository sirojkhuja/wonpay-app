import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/apps/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { APIContextProvider } from "./context/ApiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <APIContextProvider>
        <App />
    </APIContextProvider>
);
