import React from "react";
import Header from "./component/header.js";
import Footer from "./component/footer";
import "../assets/css/error.css";


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
