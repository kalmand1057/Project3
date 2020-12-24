import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import WrongLogin from "./pages/WrongLogin";
import { myContext } from "./utils/LoginContext";
import Destination from "./pages/Destination";

function App() {
  const ctx = useContext(myContext);
  const [data, setData] = useState(null);

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/api/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/destinations">
            <Destination />
        </Route>
        { ctx ? (
          <Route exact path="/welcome">
            <Welcome />
          </Route>
        ) : (
          <>
          <Route exact path="/welcome">
            <WrongLogin />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}


export default App;