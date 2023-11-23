import React from "react";
import "./input.css"

function input(props) {
  const { size = "medium", ...rest } = props;
  return <input className={`input ${size}`} {...rest} />;
}

export default input;
