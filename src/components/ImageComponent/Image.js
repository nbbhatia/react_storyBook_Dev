import React from "react";
import "./image.css";

function Image(props) {
  const { img, title } = props;
  
  return (
    <div className={`image_component ${title}`}>
      <img src={img} alt={title} />
    </div>
  );
}

export default Image;
