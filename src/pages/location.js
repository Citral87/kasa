import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import data from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/data/logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/carrousel.js";
import TagButtons from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/tags_button.js";
import Collapse from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/component/collapse.js";
import "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/css/location.css";

function Location() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchedData = data.find((item) => item.id === id);
    setLocationData(fetchedData);

    if (!fetchedData) {
      navigate("/404");
    }
  }, [id, navigate]);

  if (!locationData) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + 1) % locationData.pictures.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + locationData.pictures.length) %
        locationData.pictures.length
    );
  };

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
