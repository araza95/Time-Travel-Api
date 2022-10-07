import { CssBaseline, Grid } from "@material-ui/core";
import React, { FC } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

const App: FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default App;
