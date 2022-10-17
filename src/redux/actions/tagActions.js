import { ActionTypes } from "../constants/action-types";

export const setTags = (tags) => {
  return {
    type: ActionTypes.SET_TAGS,
    payload: tags,
  };
};

export const setTagFilter = (tags) => {
  return {
    type: ActionTypes.SET_TAG_FILTER,
    payload: tags,
  };
};

export const setSelectedTags = (tags) => {
  return {
    type: ActionTypes.SET_SELECTED_TAGS,
    payload: tags,
  };
};

export const isAllTagsSelected = (isSelected) => {
  return {
    type: ActionTypes.ALL_TAGS_SELECTED,
    payload: isSelected,
  };
};
