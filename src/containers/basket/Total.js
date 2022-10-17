import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Total() {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.basketTotal);
  useEffect(() => {}, [total]);
  return (
    <Box
      width={129}
      height={76.64}
      textAlign="center"
      marginLeft={"414.67px"}
      sx={{ backgroundColor: "#147594", marginTop: 0 }}
    >
      <h1 style={{ color: "#FFFFFF", fontSize: "14px", paddingTop: 25 }}>
        <img src="Group.png"></img> &nbsp; ₺ {total}
      </h1>
    </Box>
  );
}
