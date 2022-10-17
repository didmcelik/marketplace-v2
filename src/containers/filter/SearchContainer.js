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

{
  /* <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 296,
          height: 274,
          borderColor: "#E0E0E0",
          borderRadius: 2,
        }}
      >
        <SearchBar searchBy="brand"></SearchBar>
        <SimpleBar
          autoHide={false}
          style={{
            maxHeight: "calc(95%)",
            maxWidth: "calc(100%)",
            paddingRight: 20,
            marginTop: 17,
          }}
        >
          <Box sx={{ width: 214, height: 142 }}>
            <input
              type="checkbox"
              sx={{ color: "#1EA4CE" }}
              onClick={(e) => {
                dispatch(setSelectedBrands(allBrands));
                // : dispatch(setSelectedTags(allTags));
              }}
            />
            <h1 style={{ fontSize: "14px" }}> All</h1>

            {renderList}
          </Box>
        </SimpleBar>
      </Box> */
}
