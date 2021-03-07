import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart } from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productkeys = Object.keys(savedCart);
    //const counts = Object.values(savedCart);
    const cartProducts = productkeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });

    setCart(cartProducts);
  }, []);

  return (
    <div>
      <h1>Cart Items: {cart.length}</h1>
      {cart.map((product) => (
        <ReviewItem key={product.key} product={product}></ReviewItem>
      ))}
    </div>
  );
};

export default Review;
