import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Banner(props) {
  const classes = useStyles();
  const { post, buttons } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h2"
              variant="h4"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="inherit" paragraph>
              {post.fecha} - {post.hora}
            </Typography>
            <Grid container direction="row">
              {buttons.map((b) => (
                <Box key={b.text} mr={2} my={1}>
                  <Button
                    startIcon={<Icon>{b.icon}</Icon>}
                    variant="contained"
                    color={b.color}
                    onClick={() => window.open(b.link, "_blank")}
                    disabled={b.disabled}
                  >
                    {b.text}
                  </Button>
                </Box>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Banner.propTypes = {
  post: PropTypes.object,
};
