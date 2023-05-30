import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import data from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/data/logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/css/location.css'

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
  }, [id]);

  if (!locationData) {
    navigate('/any-non-existent-route');

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
          <button className="image-change-btn" onClick={prevImage}>{'<'}</button>
          <img className="image" src={locationData.pictures[currentImageIndex]} alt="" />
          <button className="image-change-btn" onClick={nextImage}>{'>'}</button>
        </div>
        <div className="location-info">
          <h2 className="location-title">{locationData.title}</h2>
          <h3 className="location-location">{locationData.location}</h3>
          <div className="location-tags">
            {locationData.tags.map((tag, index) => (
              <button key={index} className="location-tag">{tag}</button>
            ))}
          </div>
          <div className="location-host">
            <p className="location-host-name">{locationData.host.name}</p>
            {[...Array(5)].map((e, i) => <FontAwesomeIcon key={i} icon={faStar} style={{ color: i < Number(locationData.rating) ? 'red' : 'gray' }} />)}
          </div>
          <div className="location-description">
            {locationData.description && (
              <>
                <button
                  className="location-collapse-btn"
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                >
                  Description
                  <div className="arrow">{isDescriptionOpen ? '<' : '>'}</div>
                </button>
                {isDescriptionOpen && <p>{locationData.description}</p>}
              </>
            )}
          </div>
          <div className="location-equipment">
            {locationData.equipments && (
              <>
                <button className="location-collapse-btn" onClick={() => setIsEquipmentOpen(!isEquipmentOpen)}>
                  Equipement
                  <div className="arrow">{isEquipmentOpen ? '<' : '>'}</div>
                </button>
                {isEquipmentOpen &&
                  locationData.equipments.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Location;
