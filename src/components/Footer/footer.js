import React from "react";
import { Typography } from "@mui/material";
import "./footer.css";


const Footer = (props) => {
  let { logo, summary } = props;
  console.log('props', props)
  return (
    <footer>
      <div className="footer_div">
        <Typography variant="h5" className="logoText">
          {logo}
        </Typography>
        <Typography variant="body1" className="summary_text" >
          {summary}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
