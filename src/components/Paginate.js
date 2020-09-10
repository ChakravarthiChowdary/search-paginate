import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outerDiv: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "0",
    marginBottom: "2rem",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
}));

const Paginate = ({
  totalPosts,
  postsPerPage,
  currentPage,
  prevClickedHandler,
  nextClickedHandler,
}) => {
  const classes = useStyles();
  const noOfPages = Math.ceil(totalPosts / postsPerPage);
  return (
    <Container>
      <div className={classes.outerDiv}>
        <div className={classes.buttonDiv}>
          <Button
            variant="contained"
            color="primary"
            disabled={currentPage === 1}
            onClick={prevClickedHandler}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={nextClickedHandler}
            disabled={currentPage === noOfPages}
          >
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Paginate;
