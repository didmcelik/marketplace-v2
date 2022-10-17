import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedBrands,
  isAllBrandsSelected,
} from "../../redux/actions/brandActions";
import { Grid, Box, Checkbox } from "@mui/material";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import {
  setSelectedTags,
  isAllTagsSelected,
} from "../../redux/actions/tagActions";

//is all selected için ayrı bir state tut
const SearchList = ({ searchBy }) => {
  const dispatch = useDispatch();
  const brandsFilter = useSelector((state) => state.brandsFilter.brands);
  const tagsFilter = useSelector((state) => state.tagsFilter.tags);
  const options = searchBy === "brand" ? brandsFilter : tagsFilter;

  const selectedBrands = useSelector((state) => state.selectedBrands.brands);
  const selectedTags = useSelector((state) => state.selectedTags.tags);
  const selectedItems = searchBy === "brand" ? selectedBrands : selectedTags;

  const allBrands = useSelector((state) => state.allBrands.brands);
  const allTags = useSelector((state) => state.allTags.tags);
  const allItems = searchBy === "brand" ? allBrands : allTags;

  const isAllBrandsFilterSelected = useSelector(
    (state) => state.isAllBrandsSelected
  );
  const isAllTagsFilterSelected = useSelector(
    (state) => state.isAllTagsSelected
  );
  const isAllSelected =
    searchBy === "brand" ? isAllBrandsFilterSelected : isAllTagsFilterSelected;

  useEffect(() => {}, [options, selectedItems]);

  useEffect(() => {
    if (isAllSelected) {
      //select item
      searchBy === "brand"
        ? dispatch(setSelectedBrands(allItems))
        : dispatch(setSelectedTags(allItems));
    } else {
      //deselect item
      searchBy === "brand"
        ? dispatch(setSelectedBrands([]))
        : dispatch(setSelectedTags([]));
    }

    console.log("isAllSelectedisAllSelected", isAllSelected);
  }, [isAllSelected]); //TODO

  const handleChange = (event, selectedItem) => {
    if (event.target.checked) {
      //select item
      searchBy === "brand"
        ? dispatch(setSelectedBrands([...selectedItems, selectedItem]))
        : dispatch(setSelectedTags([...selectedItems, selectedItem]));
    } else {
      //deselect item
      searchBy === "brand"
        ? dispatch(
            setSelectedBrands(
              selectedItems.filter(function(item) {
                return item !== selectedItem;
              })
            )
          )
        : // : dispatch(setSelectedBrands([...selectedItems, selectedItem]));
          dispatch(
            setSelectedTags(
              selectedItems.filter(function(item) {
                return item !== selectedItem;
              })
            )
          );
    }
  };

  const handleChangeAll = (event) => {
    searchBy === "brand"
      ? dispatch(isAllBrandsSelected(event.target.checked))
      : dispatch(isAllTagsSelected(event.target.checked));
  };

  const renderList = options.map((item) => {
    return (
      <Grid container direction="row" key={item}>
        <Checkbox
          style={{ color: "#1EA4CE", height: "22px", width: "22px" }}
          onClick={(e) => {
            handleChange(e, item);
          }}
          checked={selectedItems.indexOf(item) != -1}
          disabled={isAllSelected}
        />
        <h1 style={{ fontSize: "14px" }}>
          &nbsp; {item.length > 14 ? `${item.substring(0, 14)}..` : item}
        </h1>
      </Grid>
    );
  });

  return (
    <Box sx={{ width: 260, height: 142 }}>
      <SimpleBar
        autoHide={false}
        style={{
          maxHeight: "calc(95%)",
          maxWidth: "calc(100%)",
          paddingRight: 20,
          marginTop: 17,
        }}
      >
        <Grid container direction="row">
          <Checkbox
            sx={{ color: "#1EA4CE", height: "22px", width: "22px" }}
            onClick={handleChangeAll}
          />
          <h1 style={{ fontSize: "14px" }}> &nbsp; All</h1>
        </Grid>

        {options && renderList}
      </SimpleBar>
    </Box>
  );
};

export default SearchList;

{
  /* <input
            type="checkbox"
            sx={{ color: "#1EA4CE", height: "22px", width: "22px" }}
            onClick={handleChangeAll}
          /> */
}

{
  /* <input
          type="checkbox"
          style={{ backgroundColor: "#1EA4CE" }}
          onClick={(e) => {
            handleChange(e, item);
          }}
          checked={selectedItems.indexOf(item) != -1}
          disabled={isAllSelected}
        /> */
}
