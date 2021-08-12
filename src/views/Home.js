import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";
import Title from "../components/Title";
import Footer from "../components/Footer";

import { nameTitle, subTitle } from "../data/title";
import { bannerText, bannerButtons } from "../data/banner";
import { events } from "../data/events";

import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4b0082",
      },
      secondary: {
        main: "#1a237e",
        // main: '#1b5e20',
      },
    },
    logo: {
      maxWidth: 160,
    },
  });

  return (
    <div>
      <Navbar />
      <Container style={{ padding: 20 }}>
        <Title title={nameTitle} subTitle={subTitle} />
        <ThemeProvider theme={theme}>
          <Grid container>
            <Grid item xs>
              <Paper elevation={3}>
                <Banner post={bannerText} buttons={bannerButtons} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {events.map((post) => (
              <Card key={post.title} post={post} />
            ))}
          </Grid>
          <Footer />
        </ThemeProvider>
      </Container>
    </div>
  );
}
