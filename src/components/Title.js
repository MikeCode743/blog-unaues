import { Hidden, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export default function Title(props) {
  const { title } = props;

  return (
    <div>
      <Hidden smDown>
        <Typography align="center" variant="h4" gutterBottom>
          {title}
        </Typography>
      </Hidden>
    </div>
  );
}
