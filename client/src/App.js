import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { myContext } from "./utils/LoginContext";

function App() {
  const ctx = useContext(myContext);
  const [data, setData] = useState(null);

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/api/user",
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
        <Route exact path="/login">
          <Login title="Log In" submit="Log in" />
          <p style={{textAlign: "center"}}>New User? Register <a href="/register">Here</a></p>
        </Route>
        <Route exact path="/register">
          <Login title="Sign Up" submit= "Sign up" />
        </Route>
        { ctx ? (
          <Route exact path="/welcome">
            <p>You made it!</p>
          </Route>
        ) : (
          <>
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