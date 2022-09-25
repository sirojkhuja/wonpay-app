import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Apx from "./Apx";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Apc from "./Apc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {true ? <App /> : true ? <Apc /> : <Apx />}
    </React.StrictMode>
);
