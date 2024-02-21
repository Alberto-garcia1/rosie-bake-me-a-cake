import React from "react";
import { useParams } from "react-router-dom";
import { CupCakeList } from "../helpers/CupCakeList"; // Importing the list of projects
import "../styles/CakeDisplay.css";

function CupCakeDisplay() {
  const { id } = useParams(); // Accessing the id parameter from the URL
  const cake = CupCakeList[id]; // Finding the project with the corresponding id

  // If the project is not found, display a message
  if (!cake) {
    return <div>Project not found</div>;
  }

  return (
    <div className="cake">
      {/* Displaying project name */}
      <h1>{cake.name}</h1>
      {/* Displaying project image */}
      <img src={cake.image} alt="project snapshot" />
      {/* Link to the project's GitHub repository */}
      <a href={cake.link}>
      </a>{" "}
      {/* Displaying project skills */}
      <p>
        <b>Skills:</b> {cake.skills}
      </p>
    </div>
  );
}

export default CupCakeDisplay;