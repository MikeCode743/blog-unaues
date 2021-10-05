import { Card, CardContent, Container, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";

import Banner from "../components/Banner";
import Cards from "../components/Card";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import List from "../components/List";
import Tour from "../components/Tour";
import Search from "../components/Assistance";

import { nameTitle, subTitle } from "../data/title";
import { bannerText, bannerButtons } from "../data/banner";
import { events } from "../data/events";

import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

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

  const [seeList, setSeeList] = useState(false);

  const handleSeeList = () => {
    if (!seeListTour) {
      setSeeList((prevState) => !prevState);
    } else {
      // Para ocultar listado de gira
      setSeeList((prevState) => !prevState);
      setSeeListTour((prevState) => !prevState);
    }
  };

  const [seeListTour, setSeeListTour] = useState(false);
  const handleSeeListTour = () => {
    if (!seeList) {
      setSeeListTour((prevState) => !prevState);
    } else {
      // Para ocultar listado oficial
      setSeeList((prevState) => !prevState);
      setSeeListTour((prevState) => !prevState);
    }
  };

  return (
    <div>
      <Navbar seeList={handleSeeList} seeListTour={handleSeeListTour} />
      <Container style={{ padding: 20 }}>
        <ThemeProvider theme={theme}>
          {seeList || seeListTour ? (
            <>
              {seeList && <List seeList={handleSeeList} />}
              {seeListTour && <Tour seeListTour={handleSeeListTour} />}
            </>
          ) : (
            <>
              <Title title={nameTitle} subTitle={subTitle} />
              <Grid container>
                <Grid item xs>
                  <Paper elevation={3}>
                    <Banner post={bannerText} buttons={bannerButtons} />
                  </Paper>
                </Grid>
              </Grid>
              <Grid
                container
                cdirection="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12}>
                  <Card variant="outlined">
                    <CardContent>
                      <Search />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                {events.map((post) => (
                  <Cards key={post.title} post={post} />
                ))}
              </Grid>
            </>
          )}

          <Footer />
        </ThemeProvider>
      </Container>
    </div>
  );
}
