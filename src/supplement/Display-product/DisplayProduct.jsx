import React from "react";

const DisplayProduct = (props) => {
  const { imgUrl, name, consumers, quality, ratings } = props.item;

  return (
    <div className="single-display-item">
      <div className="display-img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="display-details">
        <h6 className="diplay-name mb-4">{name}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="consumers d-flex align-items-center gap-1">
          <i class="ri-user-line"></i> {consumers} Consumers
          </p>
          <p className="quality d-flex align-items-center gap-1">
          <i class="ri-book-open-line"></i> {quality}
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="ratings d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {ratings}
          </p>

          <p className="buy-now d-flex align-items-center gap-1">
            <a href="www.google"> Buy Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;