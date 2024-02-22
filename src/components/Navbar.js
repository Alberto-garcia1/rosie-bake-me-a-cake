import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  // State to control the expansion of the navbar
  const [expandNavbar, setExpandNavbar] = useState(false);

  // Access the current location using the useLocation hook from react-router-dom
  const location = useLocation();

  // Reset the expansion of the navbar whenever the location changes
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        {/* Button to toggle the expansion of the navbar */}
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      
      <div className="links">
        {/* Links to different routes */}
        <img src={Logo} className="logo"/>
        <Link to="/Just-Cake">Home</Link>
        <Link to="/Just-Cake/cakes">Cakes</Link>
        <Link to="/Just-Cake/weddingCakes">Wedding Cakes</Link>
        <Link to="/Just-Cake/cupcakes">Cupcakes</Link>
        <Link to="/Just-Cake/cookies">Cookies</Link>
      </div>
    </div>
  );
}

export default Navbar;
