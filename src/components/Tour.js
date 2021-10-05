import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { listTour, listSites, lastUpdate } from "../data/tour";
import {
  Button,
  Chip,
  Grid,
  Hidden,
  Icon,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";

export default function DenseTable(props) {
  const { seeListTour } = props;

  //   Metodo Para Filtro
  const [keyword, setKeyword] = useState(); //Cuadro de texto para filtro
  const [filteredParticipants, setFilteredParticipants] = useState(listTour); //Listado
  const [filterSite, setfilterSite] = React.useState(""); //Boton de filtro

  useEffect(() => {
    if (!keyword) {
      setFilteredParticipants(listTour);
    } else setfilterSite("Todos"); //Para que selector vuelva a su posicion
    setFilteredParticipants(
      listTour.filter(({ nombre }) => nombre.match(new RegExp(keyword, "i")))
    );
  }, [keyword]);

  useEffect(() => {
    if (filterSite === "Todos") {
      setFilteredParticipants(listTour);
    } else {
      setFilteredParticipants(
        listTour.filter(({ lugar }) => lugar.match(new RegExp(filterSite, "i")))
      );
    }
  }, [filterSite]);

  const handleChange = (event) => {
    setfilterSite(event.target.value);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          GIRA DE CAMPO
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Como parte de este proyecto se esta preparando realizar tres visitas
          de campo en el cual se pretende visualizar los efectos de los cambios
          climaticos en estas bioferas. Por lo tanto es muy importante para
          nosotros que visites estos lugares, el siguiente listado es de las
          personas registradas en la gira de campo y el lugar que desean visitar
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={12}
        justifyContent="center"
        alignItems="center"
      >
        <Chip
          variant="outlined"
          label={"Actualizado por ultima vez: " + lastUpdate}
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={12}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          size="small"
          variant="contained"
          color="primary"
          startIcon={<Icon>keyboard_return</Icon>}
          onClick={seeListTour}
        >
          Ocultar listado
        </Button>
      </Grid>

      {/* FILTRO */}
      <Grid item xs={12} md={9}>
        <TextField
          label="Buscar Particante"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
          fullWidth
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextField
          id="outlined-select-currency"
          select
          label="Filtar"
          value={filterSite}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        >
          {listSites.map((option) => (
            <MenuItem key={option.date} value={option.site}>
              {option.site}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* TABLA */}
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table width="100%" size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <Hidden xsDown>
                  <TableCell align="right">Institucion</TableCell>
                </Hidden>
                <TableCell align="right">Lugar a visitar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredParticipants.map((item) => (
                <TableRow key={item.nombres}>
                  <TableCell component="th" scope="row">
                    {item.nombre}
                  </TableCell>

                  <Hidden xsDown>
                    <TableCell align="right">{item.institucion}</TableCell>
                  </Hidden>
                  <TableCell align="right">{item.lugar}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid container item justifyContent="center" alignItems="center">
        <Typography variant="subtitle2" align="center" gutterBottom>
          Recuerda que si ves alguna irregularidad en los registros no dudes en
          comunicarse a algunos de los contactos de soporte.
        </Typography>
      </Grid>
    </Grid>
  );
}
