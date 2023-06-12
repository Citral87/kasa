import React from "react";
import Header from "./component/header";
import Footer from "../pages/component/footer";
import Logement from "../pages/component/card";
import logementData from "../assets/data/logements.json";
import "../assets/css/Home.css";

function Home() {
  return (
    <div>
      <Header />  
        <div className="background-image">
          <h1 className="overlay-text">Chez vous, partout et ailleurs</h1>
    </div>
      <div className="logements-container">
        {logementData.map((logement) => (
          <Logement
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
