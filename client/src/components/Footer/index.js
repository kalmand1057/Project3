import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <section className="footer">
          <div className="footer-wrap">
            <small className="website-rights">Getaway Guru © 2020</small>
            <div className="contacts ui stackable centered grid">
              <h1>Contact Us</h1>
              <a className="email" href="mailto:getawaygury2020@gmail.com">getawayguru2020@gmail.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
