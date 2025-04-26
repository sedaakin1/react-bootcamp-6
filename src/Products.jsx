/** @format */

import ProductItem from "./ProductItem";
import "./Products.css";
import { productsData } from "./data/productsData";

function Products() {
  return (
    <div>
      <h1>Products Component</h1>
      <div className="products-wrapper">
        {
            productsData.map((product) => (
                <ProductItem
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
             />
            ))
        }
      </div>
    </div>
  );
}

export default Products;
