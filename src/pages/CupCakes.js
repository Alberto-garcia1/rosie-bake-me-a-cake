import React from "react";
import { CupCakeList } from "../helpers/CupCakeList"; // Importing the list of projects
import "../styles/Cakes.css";
import { Carousel } from "react-bootstrap";
import CupcakeForm from "../assets/CupcakeForm.pdf";

function CupCakes() {
  return (
    <div className="cakes">
      <h1 className="title-of-products">Cupcakes</h1>
      <Carousel
        className="carousel"
        fluid
        autoPlay={true}
        interval={4000}
        controls={true}
        indicators={true}
      >
        {CupCakeList.map((item) => (
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
          Please fill out this{" "}
          <a href={CupcakeForm} download="CupcakeForm.pdf">
            form
          </a>{" "}
          and email it to me. I will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}

export default CupCakes;
