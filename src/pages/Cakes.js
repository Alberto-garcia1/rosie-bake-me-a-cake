import React from "react";
import CakeItem from "../components/CakeItem"; // Importing the ProjectItem component
import { CakeList } from "../helpers/CakeList"; // Importing the list of projects
import "../styles/Project.css";

function Cakes() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        {/* Mapping through the list of projects and rendering ProjectItem for each */}
        {CakeList.map((project, idx) => {
          return (
            <CakeItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cakes;
