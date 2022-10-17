import { ActionTypes } from "../constants/action-types";
import { SortTypes } from "../constants/sort-types";
export const sortTypeReducer = (
  state = SortTypes.PRICE_LOW_TO_HIGH,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_SORT_TYPE:
      return payload;
    default:
      return state;
  }
};
