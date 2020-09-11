import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    paddingBottom: "2rem",
  },
}));

const Posts = ({ posts }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Posts;
