import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  commentsPaper: {
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "1rem",
  },
}));

const Comment = ({ comment }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.commentsPaper}>
      <Typography>Email: {comment.email}</Typography>
      <Typography>Body : {comment.body}</Typography>
    </Paper>
  );
};

export default Comment;
