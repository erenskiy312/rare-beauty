import { Grid, Pagination, PaginationItem } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts, pages } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        {/* <h1 className="collaction-title">Everything For Beauty</h1> */}
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
