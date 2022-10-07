import React, { FC } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./Styles";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
          <Box style={{ display: "flex" }}>
            <Typography variant="h6" className={classes.title}>
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
