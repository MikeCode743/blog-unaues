import { Hidden, Typography } from "@material-ui/core";
import React from "react";

export default function Title(props) {
  const { title, subTitle } = props;

  return (
    <div>
      <Hidden smDown>
        <Typography
          color="textPrimary"
          align="center"
          variant="h6"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          color="textSecondary"
          align="center"
          variant="subtitle1"
          gutterBottom
        >
          {subTitle}
        </Typography>
      </Hidden>
    </div>
  );
}
