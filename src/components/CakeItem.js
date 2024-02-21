import React from "react";

function CakeItem({ image, name }) {
  // Get the navigate function from react-router-dom

  return (
    <div
      className="cakeItem"
    >
      {/* Display the project image as a background */}
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      {/* Display the project name */}
      <h1>{name}</h1>
    </div>
  );
}

export default CakeItem;
