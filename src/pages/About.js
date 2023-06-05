import React, { useState } from "react";
import Header from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/header.js";
import Footer from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/footer.js";
import Collapse from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/collapse.js";
import "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/css/about.css";
import photo from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/data/photo2.jpg";

function About() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className="About">
      <Header />
      <img className="photo2" src={photo} alt="" />
      <Collapse
        title="Fiabilité"
        isOpen={isOpen1}
        toggle={() => setIsOpen1(!isOpen1)}
      >
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </Collapse>

      <Collapse
        title="Respect"
        isOpen={isOpen2}
        toggle={() => setIsOpen2(!isOpen2)}
      >
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </Collapse>

      <Collapse
        title="Service"
        isOpen={isOpen3}
        toggle={() => setIsOpen3(!isOpen3)}
      >
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.
      </Collapse>

      <Collapse
        title="Sécurité"
        isOpen={isOpen4}
        toggle={() => setIsOpen4(!isOpen4)}
      >
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </Collapse>
      <Footer />
    </div>
  );
}

export default About;
