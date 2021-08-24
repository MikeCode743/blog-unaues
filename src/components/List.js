import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { listadoOficial } from "../data/listado";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable(props) {
  const { seeList } = props;

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Institucion</TableCell>
            <TableCell align="right">Correo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listadoOficial.map((item) => (
            <TableRow key={item.nombre}>
              <TableCell component="th" scope="row">
                {item.nombre}
              </TableCell>
              <TableCell align="right">{item.institucion}</TableCell>
              <TableCell align="right">{item.correo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
