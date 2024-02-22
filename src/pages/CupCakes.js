import React from "react";
import CupCakeItem from "../components/CupCakeItem"; // Importing the ProjectItem component
import { CupCakeList } from "../helpers/CupCakeList"; // Importing the list of projects
import "../styles/ProjectPages.css";

function CupCakes() {
  return (
    <div className="cakes">
      <h1>Cupcakes</h1>
      <div className="cakeList">
        {/* Mapping through the list of projects and rendering ProjectItem for each */}
        {CupCakeList.map((cake, idx) => {
          return (
            <CupCakeItem
              key={idx}
              id={idx}
              name={cake.name}
              image={cake.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CupCakes;
