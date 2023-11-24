import React from "react";
import { Typography } from "@mui/material";
import "./typography.css";

function TypographyComponent(props) {
  const { variantType = "h1", children} = props;
  return (
    <Typography className={`typo ${variantType}`} variant={variantType}>
      {children}
    </Typography>
  );
}

export default TypographyComponent;
