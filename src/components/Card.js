import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, CardActions, Hidden, Icon } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.card} variant="outlined">
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h5" variant="h5">
              {post.title}
            </Typography>
            <Typography component="h6">{post.subtitle}</Typography>
            <Typography variant="subtitle1">{post.description}</Typography>
            {post.list && (
              <ul>
                <Typography variant="subtitle1">
                  {post.list.map((element) => (
                    <li key={element}>{element}</li>
                  ))}
                </Typography>
              </ul>
            )}
            <Typography variant="subtitle2" color="textSecondary">
              {post.date}
            </Typography>
          </CardContent>
          {post.buttons && (
            <Grid container direction="row" justifyContent="space-evenly">
              <CardActions>
                {post.buttons.map((b) => (
                  <Button
                    key={b.text}
                    variant="contained"
                    href={b.link}
                    color={b.color}
                    startIcon={<Icon>{b.icon}</Icon>}
                  >
                    {b.text}
                  </Button>
                ))}
              </CardActions>
            </Grid>
          )}
        </div>
        <Hidden smDown>
          {post.image && (
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          )}
        </Hidden>
      </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
