import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: "100%",
    height: "100px",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textfield: {
    width: "200%",
  },
  formControl: {
    minWidth: 120,
  },
}));

const Navbar = ({
  searchChangedHandler,
  sortOrderChangedHandler,
  postsPerPageChangedHandler,
  postsPerPage,
  sortOrder,
}) => {
  const classes = useStyles();
  const searchText = useSelector((state) => state.root.searchText);

  return (
    <Container>
      <div style={{ paddingTop: "1rem" }}>
        <Paper className={classes.paper} elevation={5}>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Posts per page
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={postsPerPage}
              onChange={postsPerPageChangedHandler}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={16}>16</MenuItem>
            </Select>
          </FormControl>
          <div>
            <Grid
              container
              spacing={1}
              alignItems="flex-end"
              className={classes.textfield}
            >
              <Grid item>
                <SearchIcon color="primary" />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Search posts"
                  fullWidth={true}
                  color="primary"
                  value={searchText}
                  onChange={searchChangedHandler}
                />
              </Grid>
            </Grid>
          </div>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Order by
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={sortOrder}
              onChange={sortOrderChangedHandler}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={0}>From Top</MenuItem>
              <MenuItem value={1}>From Bottom</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </div>
    </Container>
  );
};

export default Navbar;
