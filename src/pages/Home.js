import React from "react";
import "../styles/Home.css";
//import ProfilePic from "../assets/ProfilePic.jpg";

function Home() {
  // Style for the profile picture
  const imageStyle = {
    width: "250px",
    borderRadius: "50%",
  };

  return (
    <div className="home">
      {/* Profile picture */}
      {/* <img src={ProfilePic} alt="Profile" style={imageStyle} /> */}
      <div className="about">
        <h2>Hello My Name Is Alberto</h2>
        <div className="prompt">
          {/* Description about yourself */}
          <p>
            A software developer with a passion for learning and creating
            beautiful websites.
          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          {/* List of skills */}
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, Bootstrap, NPM,
              MaterialUI, Firebase
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
          <li className="item">
            <h2>Soft Skills</h2>
            <span>
              Communication, Attention to Detail, Problem Solving, Collaboration
              and Teamwork, Creativity
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
