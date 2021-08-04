import {
  AppBar,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

import MainPost from "../components/MainPost";
import Post from "../components/Post";
import Title from "../components/Title";

export default function Home() {
  const mainFeaturedPost = {
    title: "Taller 1 -  Saneamiento Básico y Medidas Sanitarias",
    description:
      "Mejorar el conocimiento sobre los componentes básicos del saneamiento y la necesidad de implementar medidas sanitarias.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    buttonText: "Reunirse Ahora",
    buttonLink: "#",
  };

  const featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
    {
      title: "Post title1",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
  ];

  const title =
    "Fortalecimiento de las capacidades de la juventud en reducción del riesgo de desastres y adaptación a cambios al cambios climático con énfasis en inclusión social";

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">UNAUES</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ padding: 20 }}>
        <Title title={title} />
        <Grid Container>
          <Grid item xs spacing={12}>
            <Paper elevation={3}>
              <MainPost post={mainFeaturedPost} />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <Post key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
      <h1>BLOG</h1>
    </div>
  );
}
