import React from 'react';

function Logement({ title, cover }) {
  return (
    <div className="logement">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default Logement;
