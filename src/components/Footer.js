import React from "react";
import { Instagram, Email } from "@mui/icons-material";
import "../styles/Footer.css";

function Footer() {
  // Creates a constantly updating year date.
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* Instagram link */}
        <a
          href="https://www.instagram.com/rosie_bakemeacake/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        {/* Email link */}
        <a
          href="mailto:albertogarcia2220@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
        </a>
      </div>
      {/* Copyright statement */}
      <p>Website Created by Alberto Garcia ⓒ {year} </p>
    </div>
  );
}

export default Footer;
