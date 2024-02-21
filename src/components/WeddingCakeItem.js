import React from "react";

function WeddingCakeItem({ image, name }) {
  // Get the navigate function from react-router-dom

  return (
    <div
      /*cakeItme should be differnet name because of css */
      className="cakeItem"
    >
      {/* Display the project image as a background */}
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      {/* Display the project name */}
      <h1>{name}</h1>
    </div>
  );
}

export default WeddingCakeItem;
