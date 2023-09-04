import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../picture/images/shoes.jpg";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about-img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about-content">
              <h2>More Information</h2>
              <p>
                Our services offer high quality product in Local branches.
                The material use are all original and high quality yet affordable
                that give our local costumers great satisfaction. We serve our costumers
                for over a decade. We will assure that our product delivered on time and
                newly made.
              </p>

              <div className="about-counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single-counter">
                    <span className="counter">
                      <CountUp start={0} end={15} duration={1.5} suffix="K" />
                    </span>

                    <p className="counter-title"> <i class="ri-user-received-line"></i> Local Followers</p>
                  </div>

                  <div className="single-counter">
                    <span className="counter">
                      <CountUp start={0} end={20} duration={1.5} suffix="M" />
                    </span>

                    <p className="counter-title">Local Consumers <i class="ri-user-line"></i></p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single-counter">
                    <span className="counter">
                      <CountUp start={0} end={9} duration={1.5} suffix=".5 %" />
                    </span>

                    <p className="counter-title"><i class="ri-star-line"></i> Ratings</p>
                  </div>

                  <div className="single-counter">
                    <span className="counter">
                      <CountUp start={0} end={11} duration={1.5} suffix=" brances" />
                    </span>

                    <p className="counter-title">Local Branches <i class="ri-building-4-line"></i></p>
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

export default AboutUs;
