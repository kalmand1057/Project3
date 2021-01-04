import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from '../Button';


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
        </div>
      <section className="footer">
        <div className="footer-wrap">
          <div className="footer-logo">
          </div>
          <small className="website-rights">Getaway Guru © 2020</small>
          <div className="contacts">
          <h1>Contact Us</h1>
          <a className="email" href="mailto:getawaygury2020@gmail.com">getawaygury2020@gmail.com</a>
          </div>
        
        </div>
      </section>
      </div>
    </div>
  );
}

export default Footer;
