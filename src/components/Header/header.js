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
    <div
      className="header_div"
      style={{
        background: scrollYPosition > 666 ? "black" : "transparent",
      }}
    >
      <Container fixed sx={{ display: "flex" }}>
        <h2>Logo</h2>
        <ul className="ul-list">
          {props.data.map((link, key) => (
            <li className="router_link">{link.title}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Home;
