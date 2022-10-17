import { combineReducers } from "redux";
import {
  brandsReducer,
  brandFilterReducer,
  selectedBrandsReducer,
  isAllBrandsSelectedReducer,
} from "./brandReducer";
import {
  filteredProductsReducer,
  productsReducer,
  selectedProductsReducer,
  selectedProductTypeReducer,
} from "./productReducer";

import {
  tagsReducer,
  tagFilterReducer,
  selectedTagsReducer,
  isAllTagsSelectedReducer,
} from "./tagReducer";

import {
  currenPageIndexReducer,
  lastPageIndexReducer,
} from "./paginationReducer";
import { basketReducer, basketTotalReducer } from "./basketReducer";
import { sortTypeReducer } from "./sortTypeReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  productType: selectedProductTypeReducer,
  allBrands: brandsReducer,
  brandsFilter: brandFilterReducer,
  selectedBrands: selectedBrandsReducer,
  allTags: tagsReducer,
  tagsFilter: tagFilterReducer,
  selectedTags: selectedTagsReducer,
  isAllBrandsSelected: isAllBrandsSelectedReducer,
  isAllTagsSelected: isAllTagsSelectedReducer,
  currenPageIndex: currenPageIndexReducer,
  filteredProducts: filteredProductsReducer,
  lastPageIndex: lastPageIndexReducer,
  basketProducts: basketReducer,
  basketTotal: basketTotalReducer,
  sortType: sortTypeReducer,
});

export default reducers;
