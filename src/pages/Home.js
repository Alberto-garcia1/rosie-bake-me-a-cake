import "../styles/Home.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import BakeMeACakeLogo from "../assets/BakeMeACakeLogo.png";

function Home() {

  // Define items array outside of the return statement
  const items = [
    {
      src: "https://picsum.photos/id/123/1200/400",
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: "https://picsum.photos/id/456/1200/400",
      altText: "Slide 2",
      caption: "Slide 2",
      key: 2,
    },
    {
      src: "https://picsum.photos/id/678/1200/400",
      altText: "Slide 3",
      caption: "Slide 3",
      key: 3,
    },
  ];

  return (
    <Container fluid="true">
      <Row>
        <Col>
          <div className="home">
            <div className="about">
              <h2 className="alt-font-color">Rosie </h2><h2>Bake Me A Cake</h2>
              <div className="prompt">      
              <img src={BakeMeACakeLogo} className="imageStyle" alt="Slogan"/>
                <p>
                  Baking Beautiful <br></br>Memories
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Carousel className="carousel" fluid autoPlay={true} interval={4000} controls={true} indicators={true}>
        {items.map((item) => (
          <Carousel.Item key={item.key}>
            <img className="d-block w-100" src={item.src} alt={item.altText} />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Home;
