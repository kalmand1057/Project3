import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from '../Button';


function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
        </div>
      <section class="footer">
        <div class="footer-wrap">
          <div class="footer-logo">
          </div>
          <small class="website-rights">Getaway Guru © 2020</small>
          <div class="contacts">
          <h1>Contact Us</h1>
          <a class="email" href="mailto:getawaygury2020@gmail.com">getawaygury2020@gmail.com</a>
          </div>
        
        </div>
      </section>
      </div>
    </div>
  );
}

export default Footer;
