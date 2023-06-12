import React from "react";
import Header from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/header.js";
import "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/css/error.css";
import Footer from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/footer.js";

function NotFound() {
  return (
    <div className="NotFound">
      <Header />
      <div className="NotFound__content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
      <Footer/>
    </div>
  );
}

export default NotFound;
