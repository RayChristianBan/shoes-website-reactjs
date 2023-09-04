import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./details.css";

const DetailsInfo = [
  {
    title: "Gift/Voucher",
    description: "Here's a gift voucher for our loyal costumer who always trust our product",
    icon: "ri-gift-line",
  },

  {
    title: "All Time Support",
    description: "Thank you for our loyal Costumer that always support us. Buy our product",
    icon: "ri-discuss-line",
  },

  {
    title: "Android",
    description: "Soon we will available via ",
    icon: "ri-android-line",
  },
];

const Details = () => {
  return (
    <section>
      <Container>
        <Row>
          {DetailsInfo.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single-feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Details;
