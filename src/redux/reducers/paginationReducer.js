import { ActionTypes } from "../constants/action-types";
export const currenPageIndexReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CURRENT_PAGE_INDEX:
      return payload;
    default:
      return state;
  }
};

export const lastPageIndexReducer = (state = 20, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LAST_PAGE_INDEX:
      return payload;
    default:
      return state;
  }
};
