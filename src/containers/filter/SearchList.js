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

// Filter options depending on the search type tags or brand
const SearchList = ({ searchBy }) => {
  const dispatch = useDispatch();
  const brandsFilter = useSelector((state) => state.brandsFilter.brands);
  const tagsFilter = useSelector((state) => state.tagsFilter.tags);
  const options = searchBy === "brand" ? brandsFilter : tagsFilter; //filter options depending on search filter

  const selectedBrands = useSelector((state) => state.selectedBrands.brands);
  const selectedTags = useSelector((state) => state.selectedTags.tags);
  const selectedItems = searchBy === "brand" ? selectedBrands : selectedTags; //selected filter options

  const allBrands = useSelector((state) => state.allBrands.brands);
  const allTags = useSelector((state) => state.allTags.tags);
  const allItems = searchBy === "brand" ? allBrands : allTags; //  all filter options (needed to change current selected filters if "all" clicked)

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
        ? dispatch(setSelectedBrands(allItems)) // select all brands filter options if "all" clicked
        : dispatch(setSelectedTags(allItems));
    } else {
      //deselect item
      searchBy === "brand"
        ? dispatch(setSelectedBrands([])) // deselect all brands filter options if "all" clicked
        : dispatch(setSelectedTags([]));
    }
  }, [isAllSelected]); //Re-render if "select all" value changes.

  const handleChange = (event, selectedItem) => {
    if (event.target.checked) {
      //select item
      searchBy === "brand"
        ? dispatch(setSelectedBrands([...selectedItems, selectedItem])) // add to selected filter options
        : dispatch(setSelectedTags([...selectedItems, selectedItem]));
    } else {
      //deselect item
      searchBy === "brand"
        ? dispatch(
            setSelectedBrands(
              selectedItems.filter(function (item) {
                //delete from selected filter options
                return item !== selectedItem;
              })
            )
          )
        : dispatch(
            setSelectedTags(
              selectedItems.filter(function (item) {
                //delete from selected filter options
                return item !== selectedItem;
              })
            )
          );
    }
  };

  const handleChangeAll = (event) => {
    //handle if "All" select clicked
    searchBy === "brand"
      ? dispatch(isAllBrandsSelected(event.target.checked))
      : dispatch(isAllTagsSelected(event.target.checked));
  };

  const renderList = options.map((item) => {
    // render filter options by current filter value
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
