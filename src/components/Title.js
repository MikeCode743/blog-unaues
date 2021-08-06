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
          variant="h5"
          gutterBottom
        >
          {title}
          <Typography
            color="textSecondary"
            align="center"
            variant="subtitle1"
            gutterBottom
          >
            {subTitle}
          </Typography>
        </Typography>
      </Hidden>
    </div>
  );
}
