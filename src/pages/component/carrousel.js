import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight,} from "@fortawesome/free-solid-svg-icons";
// Le composant Carousel prend est utilisée pour extraire directement la propriété d'images 
function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);// L'indice de l'image actuelle dans le carrousel

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);// La fonction qui est appelée quand l'utilisateur clique >
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length// La fonction qui est appelée quand l'utilisateur clique <
    );
  };

  return (
    <div className="carousel">
      {images.length > 1 ? ( 
        <>
          <button
            className="carousel-btn carousel-btn-left"
            onClick={prevImage}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img
            className="carousel-image"
            src={images[currentImageIndex]}
            alt=""
          />
          <button
            className="carousel-btn carousel-btn-right"
            onClick={nextImage}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <p className="carousel-index">
            {currentImageIndex + 1} / {images.length}
          </p>
        </>
      ) : (
        <img className="carousel-image" src={images[0]} alt="" />
      )}
    </div>
  );
}

export default Carousel;
