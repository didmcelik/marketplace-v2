import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPageIndex,
  setCurrentLastPageIndex,
} from "../../redux/actions/paginationActions";

const ItemPagination = () => {
  const dispatch = useDispatch();
  const currenPageIndex = useSelector((state) => state.currenPageIndex);
  const currentLastPageIndex = useSelector((state) => state.lastPageIndex);
  const filteredData = useSelector((state) => state.filteredProducts.products);

  useEffect(() => {
    dispatch(
      setCurrentLastPageIndex(
        Math.ceil(filteredData.length / 16) != 0
          ? Math.ceil(filteredData.length / 16)
          : 1
      )
    );
  }, [filteredData]);

  return (
    <Grid
      sx={{ minWidth: 608, minHeight: 100, justifyContent: "center" }}
      container
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Pagination
        count={currentLastPageIndex}
        variant="outlined"
        shape="rounded"
        page={currenPageIndex}
        onChange={(event, pageNumber) => {
          dispatch(setCurrentPageIndex(pageNumber));
        }}
      />
    </Grid>
  );
};

export default ItemPagination;
