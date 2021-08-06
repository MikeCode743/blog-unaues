import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Button, Grid, Icon } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="www.unidadambientaldelaues.wordpress.com">
        UNAUES
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Soporte() {
  return (
    <>
      <Button href={"mailto:hp15004@ues.edu.sv"} startIcon={<Icon>email</Icon>}>
        hp15004@ues.edu.sv
      </Button>
      <Button href={"mailto:oo15004@ues.edu.sv"} startIcon={<Icon>email</Icon>}>
        oo15004@ues.edu.sv
      </Button>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <footer className={classes.footer}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        ></Grid>
        <Typography variant="body1">
          Soporte Técnico
          <Soporte />
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}
