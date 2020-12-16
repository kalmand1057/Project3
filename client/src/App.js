import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Axios from "axios";
import Form from "./pages/Form";
import "./App.css";

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <p>Home</p>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
        </Route>
        <Route exact path="/login">
          <Form 
            title="Log In"
            submit="Log in"
            handleEmail={(e) => setLoginUsername(e.target.value)}
            handlePassword={(e) => setLoginPassword(e.target.value)}
            handleSubmit={login}
          />
          <p style={{textAlign: "center"}}>New User? Register <a href="/register">Here</a></p>
          <div>
            <h1>Get User</h1>
            <button onClick={getUser}>Submit</button>
            {data ? <h1>Welcome Back {data.username}</h1> : null}
          </div>
        </Route>
        <Route exact path="/register">
          <Form 
            title="Sign Up"
            submit= "Sign up"
            handleEmail={(e) => setRegisterUsername(e.target.value)}
            handlePassword={(e) => setRegisterPassword(e.target.value)}
            handleSubmit={register}
            />
        </Route>
        <Route exact path="/welcome">
          {data ? <p>you made it!</p> : <p>You must be logged in to view this page!</p>}
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
