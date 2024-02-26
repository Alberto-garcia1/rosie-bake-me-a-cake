import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import BakeMeACakeLogo from "../assets/BakeMeACakeLogo.png";

function Home() {

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="home">
            <div className="title">
              <h2 className="rosie">Rosie</h2>
              <h2>Bake Me A Cake</h2>
            </div>
            <div>
              <img
              className="imageStyle"
                src={BakeMeACakeLogo}
                alt="Baking Beautiful Memories"
              />
            </div>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ultrices luctus odio, eu lobortis dui dictum non. Mauris et dui
              dapibus, malesuada erat eu, faucibus tortor. Mauris consectetur
              accumsan bibendum. Curabitur posuere odio nec turpis feugiat,
              vitae ornare nunc faucibus. Praesent ac leo neque. In efficitur
              feugiat venenatis. Nulla sed elit rutrum, viverra urna vitae,
              consequat odio. Cras aliquam posuere faucibus. Suspendisse sit
              amet sem tincidunt, varius sapien sit amet, malesuada leo. Proin
              eget velit pretium magna pulvinar varius.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
