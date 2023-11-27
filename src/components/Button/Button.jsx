import React from "react";
import {Button} from "@mui/material"
import "./Button.css";

function Button2(props) {
  const { variant = "primary",typeOfVariant="contained", children, ...rest } = props;
  return (
    <Button variant={typeOfVariant} className={`button ${variant}`} {...rest}>
      {children}
    </Button>
  );
}

export default Button2;
