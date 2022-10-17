import "./App.css";
import React from "react";
import Header from "./containers/Header";
import { makeStyles, ThemeProvider } from "@mui/styles";
import Body from "./containers/Body";
import { createTheme } from "@mui/material";

const useStyles = makeStyles({
  App: {
    width: "1440px",
    height: "1482px",
    backgroundColor: "#FAFAFA",
  },
});
const theme = createTheme({
  shadows: ["none"],
  status: {
    selectedButton: "#1EA4CE",
    unSelectedButton: "#F2F0FD",
  },
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
