import React from "react";
import "../styles/Home.css";
import { Carousel } from "react-bootstrap";
import cake1 from "../assets/cake1.jpeg";
import cake2 from "../assets/cake2.jpeg";
import cake3 from "../assets/cake3.jpeg";
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
      {/*<img src={ProfilePic} alt="Profile" style={imageStyle} /> */}
      <div className="about">
        <h2>Rosie Bake Me A Cake</h2>
        <div className="prompt">
          {/* Description about yourself */}
          <p>
            A software developer with a passion for learning and creating
            beautiful websites.
          </p>
        </div>
      </div>
      {/* Carousel */}
      <div className="carousel-container">
        <Carousel className="carousel">
          <Carousel.Item className="carousel-item" interval={5000}>
            <img src={cake1} className="carousel-img" alt="First slide" />
            <Carousel.Caption>
              <h3 className="carousel-label">First slide label</h3>
              <p className="carousel-text">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={5000}>
            <img src={cake2} className="carousel-img" alt="Second slide" />
            <Carousel.Caption>
              <h3 className="carousel-label">Second slide label</h3>
              <p className="carousel-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={5000}>
            <img src={cake3} className="carousel-img" alt="Third slide" />
            <Carousel.Caption>
              <h3 className="carousel-label">Third slide label</h3>
              <p className="carousel-text">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
