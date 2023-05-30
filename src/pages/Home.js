import React from 'react';
import Header from './component/header';
import Footer from '/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/footer.js';
import Logement from '/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/card.js'; 
import logementData from '/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/data/logements.json'; 
import '/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/css/Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="parent-div">
        <div className="background-image"></div>
        <h1 className="overlay-text">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="logements-container">
        {logementData.map((logement) => (
          <Logement key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;





