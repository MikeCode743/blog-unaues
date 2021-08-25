import React, { useMemo, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { listadoOficial } from "../data/listado";
import {
  Avatar,
  Button,
  Chip,
  Grid,
  Hidden,
  Icon,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";

export default function DenseTable(props) {
  const { seeList } = props;

  const [keyword, setKeyword] = useState();
  const filteredParticipants = useMemo(() => {
    if (!keyword) {
      return listadoOficial;
    }
    return listadoOficial.filter(({ nombre }) =>
      nombre.match(new RegExp(keyword, "i"))
    );
  }, [keyword]);

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
          Listado Oficial
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Aprovechamos el medio para solicitar de su apoyo revisando el
          siguiente listado, verificar si sus nombres están escritos
          correctamente
        </Typography>
        <Typography variant="subtitle2" align="center" gutterBottom>
          Si se requiere modificación en sus nombres según DUI, notificarlo por
          favor a cualquiera de los correos de soporte.
        </Typography>
      </Grid>

      <Button
        size="small"
        variant="contained"
        color="primary"
        startIcon={<Icon>keyboard_return</Icon>}
        onClick={seeList}
      >
        Ocultar listado
      </Button>

      <Grid item xs={12}>
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

      <Grid item>
        <Chip
          avatar={
            <Avatar>
              <Icon color="secondary">verified</Icon>
            </Avatar>
          }
          label="Correcto"
          variant="outlined"
        />
        <Chip
          avatar={
            <Avatar>
              <Icon color="error">error</Icon>
            </Avatar>
          }
          label="Datos Incompletos"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table width="100%" size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <Hidden xsDown>
                  <TableCell align="right">Institucion</TableCell>
                </Hidden>
                <Hidden mdDown>
                  <TableCell align="right">Correo</TableCell>
                </Hidden>
                <TableCell align="right">Accion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredParticipants.map((item) => (
                <TableRow key={item.nombre}>
                  <TableCell component="th" scope="row">
                    {item.nombre}
                  </TableCell>

                  <Hidden xsDown>
                    <TableCell align="right">{item.institucion}</TableCell>
                  </Hidden>
                  <Hidden mdDown>
                    <TableCell align="right">{item.correo}</TableCell>
                  </Hidden>
                  <TableCell align="right">
                    <Tooltip
                      title={
                        item.correo ? "Registrado" : "Necesitamos el correo"
                      }
                      aria-label="add"
                    >
                      {item.nombre.split(" ").length > 2 &&
                      item.institucion &&
                      item.correo ? (
                        <Icon color="secondary">verified</Icon>
                      ) : (
                        <Icon color="error">error</Icon>
                      )}
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
