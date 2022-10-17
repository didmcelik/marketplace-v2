import { ActionTypes } from "../constants/action-types";

export const setBrands = (brands) => {
  return {
    type: ActionTypes.SET_BRANDS,
    payload: brands,
  };
};

export const setBrandFilter = (brands) => {
  return {
    type: ActionTypes.SET_BRAND_FILTER,
    payload: brands,
  };
};

export const setSelectedBrands = (brands) => {
  return {
    type: ActionTypes.SET_SELECTED_BRANDS,
    payload: brands,
  };
};

export const isAllBrandsSelected = (isSelected) => {
  return {
    type: ActionTypes.ALL_BRANDS_SELECTED,
    payload: isSelected,
  };
};
