import React from "react";
import { Container, Row, Col } from "reactstrap";
import modelImg from "../../picture/images/model.jpg";
import "./model.css";

const Model= () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="model-content">
              <h2 className="model-title">
                Anytime Anywhere <br /> Order you want <br /> Can Deliver On Time
              </h2>
              <p className="description">
              Search product you wants.<br />  Classify the size you want. <br /> Explore something Interesting. <br /> Rates our product
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={modelImg} alt="" className= "w-100 hero-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Model;