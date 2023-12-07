import React from "react";
import "./image.css";

function Image(props) {
  const { title, children, ...rest } = props;

  return (
    <span className={`image_component ${title}`} {...rest}>
      {children}
    </span>
  );
}

export default Image;
