import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import "./header.css";

const Home = (props) => {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollYPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className="header_div"
      style={{
        background: scrollYPosition > 666 ? "black" : "transparent",
      }}
    >
      <Container fixed sx={{ display: "flex",background:props.backgroundColor}}>
        <h2>Logo</h2>
        <ul className="ul-list">
          {props.data.map((link, index) => (
            <li key={index} className="router_link">{link.title}</li>
          ))}
        </ul>
      </Container>
    </header>
  );
};

export default Home;
