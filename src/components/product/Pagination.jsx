import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useProducts } from "../../context/ProductContextProvider";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function CustomIcons() {
  const { pages } = useProducts();

  function getPagesCount() {
    let pageCountArr = [];

    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }
  return (
    <Pagination
      count={10}
      page={1}
      variant="outlined"
      shape="rounded"
      // renderItem={(item) => (
      //   <PaginationItem
      //     slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
      //     {...item}
      //   />
      // )}
    />
  );
}
