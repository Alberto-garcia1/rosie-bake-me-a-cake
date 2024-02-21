import React from "react";
import { useNavigate } from "react-router-dom";

function CookieItem({ image, name, id }) {
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();
  
  return (
    <div
      className="cookieItem"
      // When clicked, navigate to the project detail page with the specified id
      onClick={() => {
        navigate("/Just-Cake/project/" + id);
      }}
    >
      {/* Display the project image as a background */}
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      {/* Display the project name */}
      <h1>{name}</h1>
    </div>
  );
}

export default CookieItem;