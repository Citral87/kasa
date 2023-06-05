import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, children, isOpen, toggle }) {
  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggle}>
        {title}
        <div className="arrow">
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
