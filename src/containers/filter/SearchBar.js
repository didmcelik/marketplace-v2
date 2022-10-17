import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrands, setBrandFilter } from "../../redux/actions/brandActions";
import { setTags, setTagFilter } from "../../redux/actions/tagActions";
import useAxios from "axios-hooks";
import { makeStyles } from "@mui/styles";
import { setProducts } from "../../redux/actions/productActions";
import "simplebar/dist/simplebar.min.css";
import { db } from "../../db";
const useStyles = makeStyles({
  searchBox: {
    height: 48,
    width: 248,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    paddingLeft: "10px",
  },
});

const SearchBar = ({ searchBy }) => {
  // searchBy: "tag" ||  "brand"

  /*
  I was using the json api to fetch the data, had to change it for the deployment.

  const { REACT_APP_BASE_URL } = process.env;
  const [{ data, loading, error }, refetch] = useAxios(
    `${REACT_APP_BASE_URL}:3000/items`
  );*/

  const classes = useStyles();
  const dispatch = useDispatch();
  const brandsList = useSelector((state) => state.brandsFilter.brands);
  const tagsList = useSelector((state) => state.tagsFilter.tags);

  /*

  Since I could not use json api for deployment, I read it from the file and memoize it.
  */
  const data = db["items"];
  const itemsMemoized = useMemo(() => {
    const items = [];
    for (const da of data) {
      if (searchBy === "brand") {
        items.push(da.manufacturer);
      } else {
        da.tags.map((tag) => items.push(tag));
      }
    }
    dispatch(setProducts(data.sort((a, b) => b.price - a.price)));
    return [...new Set(items)];
  }, [data]);

  useEffect(() => {
    //first render
    if (searchBy === "brand") {
      dispatch(setBrands(itemsMemoized));
      dispatch(setBrandFilter(itemsMemoized));
    } else {
      dispatch(setTags(itemsMemoized));
      dispatch(setTagFilter(itemsMemoized));
    }
  }, [itemsMemoized]);

  useEffect(() => {}, [searchBy === "brand" ? brandsList : tagsList]);
  return (
    <>
      <input
        className={classes.searchBox}
        type="text"
        placeholder={`Search ${searchBy}`}
        onChange={(e) => {
          const filteredItems = itemsMemoized.filter(
            //TODO
            (d) => d && d.toLowerCase().startsWith(e.target.value.toLowerCase())
          );
          searchBy === "brand"
            ? dispatch(setBrandFilter(filteredItems))
            : dispatch(setTagFilter(filteredItems));
        }}
      />
    </>
  );
};

export default SearchBar;
