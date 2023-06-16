import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import data from "../assets/data/logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./component/carrousel.js";
import TagButtons from "./component/tags_button.js";
import Collapse from "./component/collapse.js";
import "../assets/css/location.css";

// Composant Location qui affiche les détails d'une location.
function Location() {
  const { id } = useParams();  // Extraire l'id de la location depuis l'URL
  const navigate = useNavigate();// Utiliser le hook useNavigate pour naviguer

   // Définir le state pour les données de la location et les composants Collapse
  const [locationData, setLocationData] = useState(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  
 // Utiliser le hook useEffect pour rechercher les données de la location à l'aide de l'id extrait de l'URL
  useEffect(() => {
    const fetchedData = data.find((item) => item.id === id);
    setLocationData(fetchedData);

    if (!fetchedData) {
      navigate("/404");
    }
  }, [id, navigate]);

  // Retourner null tant que les données de la location ne sont pas chargées
  if (!locationData) {
    return null;
  }

  return (
    <div>
      <Header />
      <div className="location-container">
        <div className="location-image-container">
          <Carousel images={locationData.pictures} />
        </div>
        <div className="location-info">
          <h2 className="location-title">{locationData.title}</h2>
          <h3 className="location-location">{locationData.location}</h3>
          <TagButtons tags={locationData.tags} />
          <div className="alignitem">
            <div className="location-host-container">
              <div className="location-host">
                <img
                  className="location-host-picture"
                  src={locationData.host.picture}
                  alt={locationData.host.name}
                />
              </div>
              <div className="location-host-name-container">
                {locationData.host.name.split(" ").map((part, index) => (
                  <p key={index} className="location-host-name">
                    {part}
                  </p>
                ))}
              </div>
            </div>
            <div className="location-ratings">
              {[...Array(5)].map((e, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  style={{
                    color:
                      i < Number(locationData.rating) ? "#FF6060" : "#E3E3E3",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="location-collapse-container">
            <div className="location-description">
              {locationData.description && (
                <Collapse
                  className="collapse-content_location"
                  title="Description"
                  isOpen={isDescriptionOpen}
                  toggle={() => setIsDescriptionOpen(!isDescriptionOpen)}
                >
                  <p>{locationData.description}</p>
                </Collapse>
              )}
            </div>
            <div className="location-equipment">
              {locationData.equipments && (
                <Collapse
                  className="collapse-content_location"
                  title="Équipements"
                  isOpen={isEquipmentOpen}
                  toggle={() => setIsEquipmentOpen(!isEquipmentOpen)}
                >
                  <div className="equipment-container">
                    {locationData.equipments.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                </Collapse>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Location;
