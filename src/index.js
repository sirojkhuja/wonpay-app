import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Apx from "./Apx";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Apc from "./Apc";
import { APIContextProvider } from "./ApiContext/ApiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <APIContextProvider>
        {false ? <App /> : false ? <Apc /> : <Apx />}
    </APIContextProvider>
);
