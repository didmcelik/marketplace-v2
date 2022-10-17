import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { setBasket } from "../redux/actions/basketActions";
const useStyles = makeStyles({
  productBg: {
    width: "124px",
    height: "124px",
    background: " #FEFEFE",
    border: " 1.17666px solid #F3F0FE",
    borderRadius: "12px",
  },

  product: {
    width: "92px",
    height: "92px",
  },

  price: {
    fontSize: "14px",
    lineHeight: " 20px",
    color: "#1EA4CE",
    height: "23px",
  },

  name: {
    height: "40px",
    fontSize: "14px",
    color: (25, 25, 25),
  },

  addButton: {
    backgroundColor: "#1EA4CE",
    width: "100%",
    outline: "none",
    color: "#FFFFFF",
    border: "none",
    marginTop: "8px",
    borderRadius: 2,
  },
});

const ProductComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.filteredProducts.products); // filtered products
  const basket = useSelector((state) => state.basketProducts.products);
  const sortType = useSelector((state) => state.sortType);
  const currenPageIndex = useSelector((state) => state.currenPageIndex);
  useEffect(() => {}, [currenPageIndex, products, sortType]);

  const renderList = products
    .slice((currenPageIndex - 1) * 16, currenPageIndex * 16)
    .map((product) => {
      const { name, added, price } = product;
      return (
        <Grid
          item
          container
          xs={3}
          key={added}
          alignItems="center"
          justifyContent="center"
          //
        >
          <Box sx={{ width: "124px", height: "225px" }}>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              className={classes.productBg}
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0042/0773/8992/products/ORIGAMIAromaMugGREEN_0001_3872x3872.jpg?v=1602356680"
                className={classes.product}
              ></img>
            </Grid>
            <h1 style={{ mt: "8px" }} className={classes.price}>
              ₺ {price}
            </h1>

            <h1 className={classes.name}>{name}</h1>
            <button
              className={classes.addButton}
              onClick={() => {
                dispatch(setBasket([...basket, product]));
              }}
            >
              <h1 style={{ fontSize: "12px" }}>Add</h1>
            </button>
          </Box>
        </Grid>
      );
    });
  return <>{renderList}</>;
};

export default ProductComponent;
