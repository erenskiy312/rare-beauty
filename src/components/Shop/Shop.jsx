import React from "react";
import PaginationRounded from "../product/Pagination";
import ProductList from "../product/ProductList";

const Shop = () => {
  return (
    <div>
      <h1 className="collaction-title">Everything For Beauty</h1>
      <ProductList />
      <>
        <PaginationRounded />
      </>
    </div>
  );
};

export default Shop;
