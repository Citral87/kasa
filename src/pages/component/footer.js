import React from "react";

import "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/css/footer.css";
import logo from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/data/kasa_logo_footer_page-0001.jpg";

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
