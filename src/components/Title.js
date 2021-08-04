import { Typography } from "@material-ui/core";
import React from "react";

export default function Title(props) {
  const { title } = props;

  return (
    <div>
      {window.screen.width > 1024 && (
        <Typography align="center" variant="h4" gutterBottom>
          {title}
        </Typography>
      )}
    </div>
  );
}
