import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import ItemTypeSelectButton from "./buttons/ItemTypeSelectButton";

const ItemTypeSelect = () => {
  const productType = useSelector((state) => state.productType);

  useEffect(() => {
    // console.log("productType", productType);
  }, [productType]);
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      sx={{ width: 129, height: 30 }}
    >
      <ItemTypeSelectButton
        selected={productType.type === "mug"}
        text={"mug"}
      ></ItemTypeSelectButton>
      <ItemTypeSelectButton
        selected={productType.type === "shirt"}
        text={"shirt"}
      ></ItemTypeSelectButton>
    </Stack>
  );
};

export default ItemTypeSelect;
