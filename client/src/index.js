import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import LoginContext from "./utils/LoginContext";

ReactDOM.render(
    <LoginContext>
        <App />
    </LoginContext>, 
    document.getElementById("root")
);
registerServiceWorker();
