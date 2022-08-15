import React from "react";
import orgLogo from "../../image/org/Mehedi.gif";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-container">
        <div className="footer-container">
          <div className="footer-img">
            <img src={orgLogo} alt="org-logo" />
          </div>
          <p>Copyright &copy; 2022 | Mohedur Rahman</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
