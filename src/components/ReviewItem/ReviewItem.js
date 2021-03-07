import React from "react";

const ReviewItem = (props) => {
  //console.log(props);
  const { name, quantity } = props.product;
  const reviewItemStyle = {
    borderBottom: "1px solid lightgray",
    paddingBottom: "16px",
    marginLeft: "200px",
  };
  return (
    <div style={reviewItemStyle} className="review-item">
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <br />
      <button className="buy-btn">Remove</button>
    </div>
  );
};

export default ReviewItem;
