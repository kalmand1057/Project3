import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import LoginContext from "./utils/LoginContext";

const imgArr = ["moped.jpeg", "mtnsriver.jpeg", "planelogin.jpeg", "citypuddle.jpeg", "lift.jpeg", "sunsetdesert.jpeg", "market.jpeg"]
const newImg = Math.floor(Math.random()*imgArr.length)

const styles = {
    html: {
        background: `linear-gradient(90deg, rgba(26, 23, 23, 0.3) 100%, rgba(26, 23, 23, 0.3) 100%), url(/${imgArr[newImg]})`,
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
