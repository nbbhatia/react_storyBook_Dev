import React from "react";
import { Typography } from "@mui/material";
import "./typography.css";

function TypographyComponent(props) {
  const { varianttype = "h1", children} = props;
  return (
    <Typography className={`typo ${varianttype}`} variant={varianttype}>
      {children}
    </Typography>
  );
}

export default TypographyComponent;
