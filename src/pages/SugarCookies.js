import React from "react";
import { CookieList } from "../helpers/CookieList"; // Importing the list of projects
import "../styles/Cakes.css";
import { Carousel } from "react-bootstrap";
import CookieForm from "../assets/CookieForm.pdf";

function SugarCookies() {
  return (
    <div className="cakes">
      <h1 className="title-of-products">Sugar Cookies</h1>
      <Carousel
        className="carousel"
        fluid
        autoPlay={true}
        interval={4000}
        controls={true}
        indicators={true}
      >
        {CookieList.map((item) => (
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
          Please fill out the following {" "}
          <a href={CookieForm} download="CookieForm.pdf">
            form 
          </a>
          {" "}and email it to me. I will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}

export default SugarCookies;
