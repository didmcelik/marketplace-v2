import { Box, Checkbox, Grid } from "@mui/material";
import React, { useEffect } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { SortTypes } from "../../redux/constants/sort-types";
import { setSortType } from "../../redux/actions/sortTypeAction";
export default function Sort() {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.sortType);

  useEffect(() => {}, [sortType]);
  return (
    <Grid
      container
      direction="column"
      alignItems="start"
      justifyContent="center"
      sx={{
        width: 256,
        height: 220,
        maring: "auto",
        borderColor: "#E0E0E0",
        borderRadius: 2,
      }}
    >
      <Grid item>
        <Checkbox
          checked={sortType === SortTypes.PRICE_LOW_TO_HIGH}
          onClick={() => {
            dispatch(setSortType(SortTypes.PRICE_LOW_TO_HIGH));
          }}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Price low to high
      </Grid>

      <Grid item>
        <Checkbox
          checked={sortType === SortTypes.PRICE_HIGH_TO_LOW}
          onClick={() => {
            dispatch(setSortType(SortTypes.PRICE_HIGH_TO_LOW));
          }}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Price high to low
      </Grid>
      <Grid item>
        <Checkbox
          checked={sortType === SortTypes.NEW_TO_OLD}
          onClick={() => {
            dispatch(setSortType(SortTypes.NEW_TO_OLD));
          }}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        New to old
      </Grid>
      <Grid item>
        <Checkbox
          checked={sortType === SortTypes.OLD_TO_NEW}
          onClick={() => {
            dispatch(setSortType(SortTypes.OLD_TO_NEW));
          }}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Old to new
      </Grid>
    </Grid>
  );
}
