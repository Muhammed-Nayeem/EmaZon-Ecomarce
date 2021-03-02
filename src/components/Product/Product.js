//All the import materials: Imported;
import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


//Creating Product Component: Created;
const Product = (props) => {
  // console.log(props.handleProductCart);
  const {name,category,img,seller,price,stock} = props.product;
  return (
    <div className="single-product">
      <div className="image-box">
        <img src={img} alt="product"/>
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <br/>
        <p>category: {category}</p>
        <br/>
        <p>by: {seller}</p>
        <br/>
        <h3>price: <span>${price}</span></h3>
        <br/>
        <small>only {stock} left in stock - order soon</small>
        <br/>
        <button className="cart-btn" onClick={() => props.handleProductCart(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
