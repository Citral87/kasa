import React from "react";
import "../../assets/css/footer.css";
import logo from "../../assets/data/LOGOn.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="blacklogo">
        <img src={logo} alt="Kasa logo" />
      </div>
      <div className="copy">
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
