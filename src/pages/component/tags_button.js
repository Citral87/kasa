import React from "react";

function TagButtons({ tags }) {
  return (
    <div className="tag-buttons">
      {tags.map((tag, index) => (
        <button key={index} className="tag-button">
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagButtons;
