import React from "react";
import "./ending.css";
import { Container, Row, Col } from "reactstrap";

const Ending = () => {
  return (
    <section>
      <Container className="ending">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Follow Us on our Page</h2>
            <div className="follow-us">
              <input type="text" placeholder="Input your Email........." />
              <button className="btn">Confirm</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ending;
