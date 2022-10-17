import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
};

export const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BASKET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const basketTotalReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BASKET_TOTAL:
      return payload;
    default:
      return state;
  }
};
