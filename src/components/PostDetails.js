import React, { useEffect } from "react";
import {
  Typography,
  Container,
  makeStyles,
  Paper,
  Button,
  CircularProgress,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useLocation, useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getPost } from "../store/Actions/actions";
import Comment from "./Comment";
import Error from "./Error";

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "90%",
  },
  detailsPaper: {
    minHeight: "50%",
    padding: "2rem",
    marginTop: "3rem",
    overflow: "scroll",
  },
  detailsButton: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1rem",
    width: "100%",
    justifyContent: "flex-end",
  },
  detailsSpinner: {
    minHeight: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PostDetails = () => {
  const classes = useStyles();
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, error, post, comments } = useSelector((state) => state.root);

  useEffect(() => {
    dispatch(getPost(params.id));
  }, [dispatch]);

  if (error) {
    return (
      <Error
        error={error}
        tryAgainClickedHandler={() => dispatch(getPost(location.state.id))}
      />
    );
  }

  return (
    <Container style={{ height: "100vh" }}>
      <div className={classes.detailsContainer}>
        {loading ? (
          <div className={classes.detailsSpinner}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <Paper className={classes.detailsPaper}>
            <Typography variant="h6">Title : {post.title}</Typography>
            <Typography variant="h6">Body : {post.body} </Typography>
            <Typography variant="h6">Comments</Typography>
            <hr />
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </Paper>
        )}
        <div className={classes.detailsButton}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={() => history.goBack()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default PostDetails;
