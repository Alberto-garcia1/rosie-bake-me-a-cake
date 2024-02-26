import React from "react";
import { CookieList } from "../helpers/CookieList"; // Importing the list of projects
import "../styles/Cakes.css";
import { Carousel } from "react-bootstrap";

function Cookies() {
  return (
    <div className="cakes">
      <h1>Sugar Cookies</h1>
      <Carousel className="carousel" fluid autoPlay={true} interval={4000} controls={true} indicators={true}>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ultrices luctus odio, eu lobortis dui dictum non. Mauris et dui
          dapibus, malesuada erat eu, faucibus tortor. Mauris consectetur
          accumsan bibendum. Curabitur posuere odio nec turpis feugiat, vitae
          ornare nunc faucibus. Praesent ac leo neque. In efficitur feugiat
          venenatis. Nulla sed elit rutrum, viverra urna vitae, consequat odio.
          Cras aliquam posuere faucibus. Suspendisse sit amet sem tincidunt,
          varius sapien sit amet, malesuada leo. Proin eget velit pretium magna
          pulvinar varius. Praesent porttitor mi at sapien blandit, quis sodales
          augue vestibulum. Etiam vel turpis quis mi hendrerit iaculis. Aenean
          lacinia est nisi, luctus molestie augue semper quis. Praesent
          facilisis scelerisque nisi.
        </p>
      </div>
    </div>
  );
}

export default Cookies;
