import React from "react";
import { Container, Row, Col } from "reactstrap";

const Logo = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i class="ri-facebook-circle-line"></i> Facebook
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1 ">
            <i class="ri-youtube-line"></i> Youtube
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i class="ri-tiktok-line"></i> Tiktok
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              {" "}
              <i class="ri-telegram-line"></i> Telegram
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-twitter-line"></i> Twitter
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-google-fill"></i> Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Logo;