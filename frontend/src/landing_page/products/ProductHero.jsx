import React from "react";
import "./ProductHero.css";

function ProductHero() {
  return (
    <div className="productContainer">
      <img
        src="media/images/Products.png"
        alt="ProductHero"
        width="500"
        height="800"
      ></img>
      <h1>Products</h1>
      <p>online platform for stockx</p>
      <button>Signup Now</button>
    </div>
  );
}

export default ProductHero;
