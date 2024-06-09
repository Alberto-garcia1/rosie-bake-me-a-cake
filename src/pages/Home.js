import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/Logo.jpg";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="home">
            <div>
              <img
                className="imageStyle"
                src={Logo}
                alt="Baking Beautiful Memories"
              />
            </div>
          </div>
          <div className="description">
            <p>
              Serving Pueblo Colorado with custom cakes, cupcakes and sugar
              cookies! Ordering is a piece of cake, simply fill out an order
              form to share your ideas with me to make your treats come true.
              Once this process is completed I will email you an invoice with
              further information and availability.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
