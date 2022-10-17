import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const selectedProductType = (productType) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT_TYPE,
    payload: productType,
  };
};

export const setFilteredProducts = (products) => {
  return {
    type: ActionTypes.SET_FILTERED_PRODUCTS,
    payload: products,
  };
};
