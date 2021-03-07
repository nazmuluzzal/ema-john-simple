import React, { useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  //console.log(fakeData);
  const first15 = fakeData.slice(0, 15);
  const [products] = useState(first15);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    //console.log("Product Added", product);
    const newCart = [...cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter((pd) => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* <h3>This is cart</h3>
        <h5>Order Summary: {cart.length}</h5> */}
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
