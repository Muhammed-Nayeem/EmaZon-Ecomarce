//All the import materials: Imported;
import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

//Shop Component: Created;
const Shop = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);

  return (
    <section className="shop-area">
      <div className="container">
       <main className="content">
          <div className="products-container">
            {
              products.map(pd => (
                <Product product={pd}></Product>
              ))
            }
          </div>
          <aside className="place-area">
            <h4>This place area</h4>
          </aside>
       </main>
      </div>
    </section>
  );
};

export default Shop;
