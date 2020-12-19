import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Form from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}


export default App;
