import React from "react";
import { Typography } from "@mui/material";
import "./typography.css";

function TypographyComponent(props) {
  const { variantType = "h1", children, ...rest } = props;
  console.log('varian', variantType)
  return (
    <Typography className={`typo ${variantType}`} variant={variantType}>
      {children}
    </Typography>
  );
}

export default TypographyComponent;
