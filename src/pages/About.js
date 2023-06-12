import React, { useState } from "react";
import Header from "./component/header.js";
import Footer from "./component/footer";
import Collapse from "./component/collapse";
import "../assets/css/about.css";
import photo from "../assets/data/photo2.jpg";

function About() {
  const [collapseItems, setCollapseItems] = useState([
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
      isOpen: false
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      isOpen: false
    },
    {
      title: "Service",
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      isOpen: false
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      isOpen: false
    }
  ]);

  const toggleItem = index => {
    setCollapseItems(
      collapseItems.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="About">
      <Header />
      <img className="photo2" src={photo} alt="" />
      {collapseItems.map((item, i) => (
        <Collapse
          key={i}
          title={item.title}
          isOpen={item.isOpen}
          toggle={() => toggleItem(i)}
        >
          {item.content}
        </Collapse>
      ))}
      <Footer />
    </div>
  );
}

export default About;
