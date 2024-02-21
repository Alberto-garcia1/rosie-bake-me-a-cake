import React from "react";
import CakeItem from "../components/CookieItem"; // Importing the ProjectItem component
import { CookieList } from "../helpers/CookieList"; // Importing the list of projects
import "../styles/Project.css";

function Cookies() {
  return (
    <div className="cakes">
      <h1>Cookies</h1>
      <div className="projectList">
        {/* Mapping through the list of projects and rendering ProjectItem for each */}
        {CookieList.map((cake, idx) => {
          return (
            <CakeItem
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

export default Cookies;