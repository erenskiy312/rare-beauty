import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useEffect } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductList = () => {
  const { products, getProducts, pages } = useProducts();

  function getPagesCount() {
    let pageCountArr = [];

    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <Grid item md={9}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: "4rem",
          }}
        ></Box>
        {/* <Pagination variant="outlined" shape="rounded" /> */}
        {/* <CustomIcons />s */}
      </Grid>
    </div>
  );
};

export default ProductList;
