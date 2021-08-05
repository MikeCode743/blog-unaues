import {
  AppBar,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";
import Title from "../components/Title";

import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

export default function Home() {
  const title =
    "Fortalecimiento de las capacidades de la juventud en reducción del riesgo de desastres y adaptación a cambios al cambios climático con énfasis en inclusión social";

  const bannerText = {
    title: "Taller 1 -  Saneamiento Básico y Medidas Sanitarias",
    description:
      "Mejorar el conocimiento sobre los componentes básicos del saneamiento y la necesidad de implementar medidas sanitarias.",
    fecha: "12 de Agosto 2021",
    hora: "8:00 am a 12:00 md ",
    image: "https://source.unsplash.com/WIYtZU3PxsI/2400x1600", // https://source.unsplash.com/{PHOTO ID}/{WIDTHxHEIGHT}
    imgText: "main image description",
  };

  const bannerButtons = [
    {
      id: 1, // Enlace de Teams
      text: "Reunirse Ahora",
      link: "https://www.google.com",
      color: "primary",
      icon: "groups",
    },
    {
      id: 2, //Formulario de asistencia
      text: "Asistencia",
      link: "#",
      color: "secondary",
      icon: "how_to_reg",
    },
    {
      id: 3, //Formulario para entregas de tareas
      text: "Entregar Tarea",
      link: "#",
      color: "default",
      icon: "task",
    },
  ];

  const events = [
    {
      title: "Registro de Aspirantes",
      date: "Hasta el 12 de agosto de 2021",
      description:
        "La Unidad Ambiental de la Universidad de El Salvador (UNAUES), invita a los participantes a este proyecto que es auspiciado por la UNESCO, a registrarse en el siguiente Formulario. ",
      image: "",
      imageText: "Image Text",
      buttons: [
        {
          text: "Registrarse",
          color: "secondary",
          icon: "person_add_alt_1",
          link: "#",
        },
      ],
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
  ];

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
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">UNAUES</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ padding: 20 }}>
        <Title title={title} />
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
        </ThemeProvider>
      </Container>
    </div>
  );
}
