import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import LoginContext from "./utils/LoginContext";

const styles = {
    html: {
        backgroundImage: "url(/sunsetriver.jpeg)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '101vw',
        height: '102vh',
        backgroundSize: "cover"
    }
}

ReactDOM.render(
    <LoginContext>
        <div style={styles.html}>
        <App />
        </div>
    </LoginContext>, 
    document.getElementById("root")
);
registerServiceWorker();
