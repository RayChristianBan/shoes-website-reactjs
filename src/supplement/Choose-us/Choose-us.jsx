import React from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../picture/images/background.jpg";
import "./choose-us.css";



const ChooseUs = () => {
  return (
    <section>
      <Container>
      <Row>
          <Col lg="6" md="6">
            <div className="choose-img">
              <img src={chooseImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about-content">
              <h2>Why Choose Us</h2>
              <p>
                We serve local for almost a decade.<br />
                Tru experience workers. <br />
                We ensure that we created a high quality yet affordable product.<br />
                We also have fair discount when purchasing a promo.<br />
              </p>
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
