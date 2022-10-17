import { ActionTypes } from "../constants/action-types";

export const setSortType = (type) => {
  return {
    type: ActionTypes.SET_SORT_TYPE,
    payload: type,
  };
};
