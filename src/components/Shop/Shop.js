//All the import materials: Imported;
import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

//Shop Component: Created;
const Shop = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <section className="shop-area">
      <div className="container">
       <main className="content">
          <div className="products-container">
            {
              products.map(pd => (
                <Product 
                product={pd}
                handleProductCart={handleAddToCart}
                ></Product>
              ))
            }
          </div>
          <aside className="place-area">
            <Cart cart={cart}></Cart>
          </aside>
       </main>
      </div>
    </section>
  );
};

export default Shop;
