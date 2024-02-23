import "../styles/Home.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
// import cake1 from "../assets/cake1.jpeg";
// import cake2 from "../assets/cake2.jpeg";
// import cake3 from "../assets/cake3.jpeg";

function Home() {
  // const imageStyle = {
  //   width: "250px",
  //   borderRadius: "50%",
  // };

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
    <Container>
      <Row>
        <Col>
          <div className="home">
            <div className="about">
              <h2>Rosie Bake Me A Cake</h2>
              <div className="prompt">
                <p>
                  A software developer with a passion for learning and creating
                  beautiful websites.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Carousel className="carousel" fluid autoPlay={true} interval={4000} controls={false} indicators={false}>
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
