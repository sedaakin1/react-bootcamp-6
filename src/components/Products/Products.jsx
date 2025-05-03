/** @format */

import ProductItem from "./ProductItem";
import { useState } from "react";
import { productsData } from "../../data/productsData";
import "./Products.css";

function Products() {

  const [globalTitle,setGlobalTitle] = useState("")

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
                globalTitle={globalTitle}
                setGlobalTitle={setGlobalTitle}
             />
            ))
        }
      </div>
    </div>
  );
}

export default Products;
