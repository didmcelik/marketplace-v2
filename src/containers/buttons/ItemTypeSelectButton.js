import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { selectedProductType } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
const useStyles = makeStyles({
  Button: {
    border: " none",
    borderRadius: 2,
    width: 60,
    height: 30,
  },
});
/*

selected: to change the colors of the button depending on the which item is selected mug/shirt
text: item type button text : mug/shirt

*/
const ItemTypeSelectButton = ({ selected, text }) => {
  const theme = useTheme();
  const classes = useStyles();
  const productType = useSelector((state) => state.productType);
  const dispatch = useDispatch();
  useEffect(() => {}, [productType]);

  return (
    <button
      className={classes.Button}
      style={{
        backgroundColor: selected
          ? theme.status.selectedButton
          : theme.status.unSelectedButton,
        color: selected
          ? theme.status.unSelectedButton
          : theme.status.selectedButton,
      }}
      onClick={() => {
        dispatch(selectedProductType({ type: text }));
      }}
    >
      <Typography>{text}</Typography>
    </button>
  );
};

export default ItemTypeSelectButton;
