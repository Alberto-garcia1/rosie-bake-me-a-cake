import React from "react";

function CupCakeItem({ image, name }) {

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

export default CupCakeItem;
