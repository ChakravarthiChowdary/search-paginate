import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Grid item key={post} xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            style={{ minHeight: "150px" }}
          >
            {post.id} : {post.title}
          </Typography>
          <hr />
          <Typography>{post.body}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
