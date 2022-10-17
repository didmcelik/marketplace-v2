import { Box } from "@mui/material";
import React from "react";
import SearchContainer from "./filter/SearchContainer";
import Sort from "./sort/Sort";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  BoxContainer: {
    padding: 2,
    width: 296,
    height: 244,
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

const SortAndFiltering = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.BoxContainer}>
        <Sort></Sort>
      </Box>
      <Box className={classes.BoxContainer}>
        <SearchContainer searchBy="tags"></SearchContainer>
      </Box>
      <Box className={classes.BoxContainer}>
        <SearchContainer searchBy="brand"></SearchContainer>
      </Box>
    </>
  );
};

export default SortAndFiltering;
