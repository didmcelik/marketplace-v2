import React from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import { makeStyles } from "@mui/styles";
import "simplebar/dist/simplebar.min.css";
import SearchList from "./SearchList";

const SearchContainer = ({ searchBy }) => {
  return (
    <>
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 256,
          height: 220,
          maring: "auto",
          borderColor: "#E0E0E0",
          borderRadius: 2,
        }}
      >
        <SearchBar searchBy={searchBy}></SearchBar>
        <SearchList searchBy={searchBy}></SearchList>
      </Box>
    </>
  );
};

export default SearchContainer;
