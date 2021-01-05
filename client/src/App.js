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
import NewDestination from "./pages/NewDestination";
import Budget from "./pages/Budget";
import Current from "./pages/Current";
import Footer from "./components/Footer";
import Comment from "./pages/Comment";
import CurrentlyLogged from "./pages/CurrentlyLogged";



function App() {
  const ctx = useContext(myContext);
  const [data, setData] = useState(null);


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        { ctx ? (
          <>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/newdestination">
            <NewDestination />
          </Route>
          <Route exact path="/current">
            <Current />
          </Route>
          <Route exact path="/destinations">
            <Destination />
          </Route>
          <Route exact path="/budget">
            <Budget />
          </Route>
          <Route exact path="/comment">
            <Comment />
          </Route>
          <Route exact path="/login">
            <CurrentlyLogged />
          </Route>
          <Route exact path="/register">
            <CurrentlyLogged />
          </Route>
          </>
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
      <Footer />
    </Router>
  );
}


export default App;