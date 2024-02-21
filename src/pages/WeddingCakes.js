import React from "react";
import WeddingCakeItem from "../components/WeddingCakeItem"; // Importing the ProjectItem component
import { WeddingCakeList } from "../helpers/WeddingCakeList"; // Importing the list of projects
import "../styles/Project.css";

function WeddingCakes() {
  return (
    <div className="cakes">
      <h1>Wedding Cakes</h1>
      <div className="projectList">
        {/* Mapping through the list of projects and rendering ProjectItem for each */}
        {WeddingCakeList.map((cake, idx) => {
          return (
            <WeddingCakeItem
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

export default WeddingCakes;
