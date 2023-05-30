import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, children, isOpen, toggle }) {
  return (
    <>
      <button className="About__button" onClick={toggle}>
        {title}
        <div className="arrow">
          {isOpen ? 
            <FontAwesomeIcon icon={faChevronUp} /> :
            <FontAwesomeIcon icon={faChevronDown} />}
        </div>
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </>
  );
}

export default Collapse;
