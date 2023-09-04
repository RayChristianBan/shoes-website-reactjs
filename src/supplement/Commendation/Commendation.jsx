import React from "react";
import "./commendation.css";
import { Container, Row, Col } from "reactstrap";


import img from "../../picture/images/another-model.jpg";

const Commendation = () => {
  
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="commendation-wrapper d-flex justify-content-between align-items-center ">
              <div className="commendation-img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="commendation-content w-50">
                <h2 className="mb-4" >More Feedback </h2>

               
                  <div>
                    <div className="single-commendation">
                      <h1 className="mb-3">
                      </h1>
                      <p>
                        We are happy to serve you! <i class="ri-bear-smile-line"></i>
                      </p>
                      </div>
                  </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Commendation;
