import React from "react";
import CookieItem from "../components/CookieItem";
import { CookieList } from "../helpers/CookieList"; // Importing the list of projects
import "../styles/Project.css";

function Cookies() {
  return (
    <div className="cakes">
      <h1>Cookies</h1>
      <div className="projectList">
        {/* Mapping through the list of projects and rendering ProjectItem for each */}
        {CookieList.map((cookie, idx) => {
          return (
            <CookieItem key={idx} id={idx} name={cookie.name} image={cookie.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Cookies;
