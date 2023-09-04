import React from 'react'
import { Container, Row, Col } from "reactstrap";
import shoesImg1 from "../../picture/images/shoes-1.jpg";
import shoesImg2 from "../../picture/images/shoes-2.jpg";
import shoesImg3 from "../../picture/images/shoes-3.jpg";
import shoesImg4 from "../../picture/images/shoes-4.jpg";
import shoesImg5 from "../../picture/images/slippers-1.jpg";
import shoesImg6 from "../../picture/images/slippers-2.jpg";
import shoesImg7 from "../../picture/images/black-shoes-1.jpg";
import shoesImg8 from "../../picture/images/black-shoes-2.jpg";
import shoesImg9 from "../../picture/images/black-shoes-3.jpg";
import "./display.css";
import DisplayProduct from "./DisplayProduct";

const displayData = [ {

     id: "01",
    name: "Leather Shoes",
    consumers: "Local",
    quality: "Original",
    ratings: 6.7,
    imgUrl: shoesImg1,
  },

  {
    id: "02",
    name: "Low Cut Shoes",
    consumers: "Local",
    quality: "Original",
    ratings: 7.8,
    imgUrl: shoesImg2,
  },

  {
    id: "03",
    name: "Low Cut for Women",
    consumers: "Local",
    quality: "Original",
    ratings: 8.7,
    imgUrl: shoesImg3,

},

{
  id: "04",
  name: "Top sider for Men",
  consumers: "Local",
  quality: "Original",
  ratings: 9.7,
  imgUrl: shoesImg4,

},

{
  id: "05",
  name: "Sandals for Women",
  consumers: "Local",
  quality: "Original",
  ratings: 6.2,
  imgUrl: shoesImg5,

},

{
  id: "06",
  name: "Slippers",
  consumers: "Local",
  quality: "Original",
  ratings: 7.3,
  imgUrl: shoesImg6,

},

{
  id: "07",
  name: "Black Shoes Type 1",
  consumers: "Local",
  quality: "Original",
  ratings: 8.5,
  imgUrl: shoesImg7,

},
{
  id: "08",
  name: "Black Shoes Type 2",
  consumers: "Local",
  quality: "Original",
  ratings: 9.1,
  imgUrl: shoesImg8,

},
{
  id: "09",
  name: "Black Shoes Type 3",
  consumers: "Local",
  quality: "Original",
  ratings: 9.4,
  imgUrl: shoesImg9,

},

];
const Display = () => {

  return <section>
  <Container>
    <Row>
      <Col lg="12" className="mb-5">
        <div className="display-top d-flex justify-content-between align-items-center">
          <div className="display-top-left w-50">
            <h2>Our Product</h2>
            <p>
              Here's our's most ratings products. 
              Even all of our product are high quality.
              It depends on consumers wants. 
              We will ensure to continue our service to give more
              satisfaction to our costumers.
            </p>
          </div>

          <div className="w-50 text-end">
            <button className="btn">See All</button>
          </div>
        </div>
      </Col>
      {displayData.map((item) => (
        <Col lg="4" md="6" sm="6">
          <DisplayProduct key={item.id} item={item} />
        </Col>
      ))}
    </Row>
  </Container>
</section>

}

export default Display;