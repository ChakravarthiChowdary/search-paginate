import React from "react";
import Typography from "@material-ui/core/Typography";

import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer style={{ paddingBottom: "2rem" }}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Search and Paginate app using REACT.JS
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
