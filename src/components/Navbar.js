import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
        <Link to="/Just-Cake">Home</Link>
        <Link to="/Personal-Website/Cajes">Projects</Link>
      </div>
    </div>
  );
}

export default Navbar;
