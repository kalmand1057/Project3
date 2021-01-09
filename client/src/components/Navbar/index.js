import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { myContext} from "../../utils/LoginContext";
import Axios from "axios";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const ctx = useContext(myContext)


  const logout = () => {
    Axios.get("/logout", {
      withCredentials: true
    }).then(window.location.replace("/"))
  }
 
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Getaway Guru 
            <i className="far fa-compass" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            { ctx ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/Welcome"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Welcome
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/destinations"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Destinations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/logout"
                    className="nav-links"
                    onClick={logout}
                  >
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Log In
                  </Link>
                </li>
              </>
            )}
          </ul>

        </div>
      </nav>
    </>

  );
}

export default Navbar;
