import axios from "axios";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  tags: [],
};

export const tagsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TAGS:
      return { ...state, tags: payload };
    default:
      return state;
  }
};

export const tagFilterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TAG_FILTER:
      return { ...state, tags: payload };
    default:
      return state;
  }
};

export const selectedTagsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_TAGS:
      return { ...state, tags: payload };
    default:
      return state;
  }
};

export const isAllTagsSelectedReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_TAGS_SELECTED:
      return payload;
    default:
      return state;
  }
};
