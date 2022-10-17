import { Box } from "@mui/material";
import React from "react";
import SearchContainer from "./filter/SearchContainer";
import Sort from "./sort/Sort";

const SortAndFiltering = () => {
  return (
    <>
      <Box
        sx={{
          padding: 2,
          width: 296,
          height: 244,
          backgroundColor: "#FFFFFF",
          marginBottom: 15, //TODO margin
        }} //TODO class
      >
        <Sort></Sort>
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: 2,
          width: 296,
          height: 244,
          backgroundColor: "#FFFFFF",
          marginBottom: 15, //TODO margin
        }}
      >
        <SearchContainer searchBy="tags"></SearchContainer>
      </Box>
      <Box
        sx={{
          padding: 2,
          width: 296,
          height: 244,
          backgroundColor: "#FFFFFF",
          marginBottom: 15, //TODO margin
        }} //TODO class
      >
        <SearchContainer searchBy="brand"></SearchContainer>
      </Box>
    </>
  );
};

export default SortAndFiltering;
