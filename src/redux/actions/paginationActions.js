import { ActionTypes } from "../constants/action-types";
export const setCurrentPageIndex = (index) => {
  return {
    type: ActionTypes.SET_CURRENT_PAGE_INDEX,
    payload: index,
  };
};

export const setCurrentLastPageIndex = (index) => {
  return {
    type: ActionTypes.SET_LAST_PAGE_INDEX,
    payload: index,
  };
};
