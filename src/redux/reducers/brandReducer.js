import axios from "axios";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  brands: [],
};

export const brandsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BRANDS:
      return { ...state, brands: payload };
    default:
      return state;
  }
};

export const brandFilterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BRAND_FILTER:
      return { ...state, brands: payload };
    default:
      return state;
  }
};

export const selectedBrandsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_BRANDS:
      return { ...state, brands: payload };
    default:
      return state;
  }
};

export const isAllBrandsSelectedReducer = (
  state = false,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ALL_BRANDS_SELECTED:
      return payload;
    default:
      return state;
  }
};
