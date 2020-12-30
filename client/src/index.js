import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import LoginContext from "./utils/LoginContext";

const imgArr = ["cloudsplane.jpeg", "moped.jgeg", "mtnsriver.jpeg", "planelogin.jpeg", "sunsetriver.jpeg"]
const newImg = imgArr[Math.floor(Math.random(imgArr.length))]

const styles = {
    // html: {
    //     backgroundImage: 'url(/mtnsriver.jpeg)',
    //     height: "100vh",
    //     backgroundRepeat: "no-repeat",
    //     backgroundAttachment: "fixed",
    //     backgroundPosition: "center",
    //     backgroundSize: "cover"
    // }
    html: {
        backgroundImage: 'url(/sunsetriver.jpeg)',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
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
