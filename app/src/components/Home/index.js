import React from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";
import "./style.css";
import FactCardOne from "../Card/FactCardOne";

function Home(props) {
  const { classes } = props;
  return (
    <div>
      <Row style={{margin: "0px"}}> 
        <Col style={{height: 140, fontFamily: "Georgia, serif",fontSize: 23}} >
          <Container fluid style={{ padding: 24}}>
            <Row style={{marginLeft:"175px"}}>
             <h3>SureShelter ~ </h3>
             <p>"Gathering and distributing resources to
                help protect and restore dignity in humanity."</p>
            </Row>
            <Row style={{marginLeft:"300px"}}>
            <p>“If you know of someone who is homeless, or by chance you are
                homeless yourself, you are not alone.”</p> <h3> ~ Asa Don Brown</h3>
                </Row>
          </Container>
        </Col>
      </Row>
      <Container className={classes} style={{marginTop: "25px"}}>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                style={{ height: 425 }}
                className="d-block w-100"
                src="https://res.cloudinary.com/ymuhammad/image/upload/v1589911773/matt-collamer-8UG90AYPDW4-unsplash_efn1dr.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://nightlightcanada.com/wp-content/uploads/2015/10/homeless-.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: 425 }}
                className="d-block w-100"
                src="https://media.npr.org/assets/img/2018/05/24/ap_17062505776035_wide-722b10839c0f48bc69b7ed6256e52513ec078d34-s800-c85.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: 425 }}
                className="d-block w-100"
                src="https://i.pinimg.com/originals/c2/25/60/c22560ad6f4d1f630f8fbb16b289e81c.jpg"
                alt="homeless woman and kid"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Row className="factcards">
          <FactCardOne />
        </Row>
      </Container>
    </div>
  );
}
export default Home;
