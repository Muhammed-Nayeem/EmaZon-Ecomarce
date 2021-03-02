//All the import materials: Imported;
import React from 'react';
import "./Cart.css";


//Creating Cart Component: Created;
const Cart = (props) => {
  const cart = props.cart;

  //Calculating Cart Products:
  const total = cart.reduce((total, product) => total + product.price, 0);

  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const product = cart[i];
  //   total += product.price;
  // }
  
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 5.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  const tax = (total / 10);
  const grandTotal = (total + shipping + tax);

  //Creating a Function to Formatting Number:
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return precision;
  }

  return (
    <div className="cart-box">
      <h3>order summary</h3>
      <br/>
      <p>items ordered: {cart.length}</p>
      <small>items: <span>${formatNumber(total)}</span></small>
      <small>shipping cost: <span>${shipping}</span></small>
      <small>total without tax: <span>${formatNumber(total+shipping)}</span></small>
      <small>estimated tax: <span>${formatNumber(tax)}</span></small>
      <h4>grand total: <span>${formatNumber(grandTotal)}</span></h4>
      <button className="review-btn">review your order</button>
    </div>
  );
};

export default Cart;
