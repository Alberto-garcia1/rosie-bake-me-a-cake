import React from "react";
import { CakeList } from "../helpers/CakeList"; // Importing the list of projects
import "../styles/Cakes.css";
import { Carousel } from "react-bootstrap";
import CakeForm from "../assets/CakeForm.pdf";

function Cakes() {
  return (
    <div className="cakes">
      <h1 className="title-of-products">Cakes</h1>
      <Carousel
        className="carousel"
        fluid
        autoPlay={true}
        interval={4000}
        controls={true}
        indicators={true}
      >
        {CakeList.map((item) => (
          <Carousel.Item key={item.key}>
            <img className="d-block w-100" src={item.src} alt={item.altText} />
            <Carousel.Caption className="carousel-caption-custom">
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        <p className="description">
        Please fill out this{" "}
          <a href={CakeForm} download="CakeForm.pdf">
            form
          </a>{" "}
          and email it to me. I will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}

export default Cakes;
