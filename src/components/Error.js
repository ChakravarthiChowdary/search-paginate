import React from "react";
import {
  Typography,
  Paper,
  Container,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  errorDiv: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  errorPaper: {
    paddingLeft: "6rem",
    paddingRight: "6rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  errorPaperDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Error = ({ error, tryAgainClickedHandler }) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.errorDiv}>
        <Paper className={classes.errorPaper} elevation={5}>
          <div className={classes.errorPaperDiv}>
            <Typography variant="h6">{error.message}</Typography>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              style={{ marginTop: "1rem" }}
              onClick={tryAgainClickedHandler}
            >
              Try Again
            </Button>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default Error;
