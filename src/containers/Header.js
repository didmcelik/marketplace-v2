import React from "react";
import { Box, Grid } from "@mui/material";
import Total from "./basket/Total";

const Header = () => {
  return (
    <Grid
      container
      direction={"row"}
      sx={{
        width: "1440px",
        height: "76.64px",
        backgroundColor: "#1EA4CE",
        marginBottom: "38.36px",
      }}
    >
      <img
        style={{
          width: "141.25px",
          height: "40.32px",
          marginLeft: "651px",
          marginTop: "18px",
        }}
        src={"Logo.png"}
      ></img>

      <Total></Total>
    </Grid>
  );
};

export default Header;
