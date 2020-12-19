import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        </Route>
        <Route exact path="/login">
          <Form title="Log In" submit="Log in" />
          <p style={{textAlign: "center"}}>New User? Register <a href="/register">Here</a></p>
        </Route>
        <Route exact path="/register">
          <Form title="Sign Up" submit= "Sign up" />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;