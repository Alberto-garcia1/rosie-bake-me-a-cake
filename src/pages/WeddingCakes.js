import React from "react";
import { WeddingCakeList } from "../helpers/WeddingCakeList"; // Importing the list of projects
import "../styles/Cakes.css";
import { Carousel } from "react-bootstrap";
import CakeForm from "../assets/CakeForm.pdf";

function WeddingCakes() {
  return (
    <div className="cakes">
      <h1 className="title-of-products">Wedding Cakes</h1>
      <Carousel
        className="carousel"
        fluid
        autoPlay={true}
        interval={4000}
        controls={true}
        indicators={true}
      >
        {WeddingCakeList.map((item) => (
          <Carousel.Item key={item.key}>
            <img className="d-block w-100" src={item.src} alt={item.altText} />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        <p className="description">
          Please fill out this {" "}
          <a href={CakeForm} download="CakeForm.pdf">
            form
          </a>
          {" "}and email it to me. I will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}

export default WeddingCakes;
