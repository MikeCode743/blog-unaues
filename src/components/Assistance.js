import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip, TextField, Typography } from "@material-ui/core";
import { lastUpdate, list } from "../data/assitance";
import { Box } from "@mui/system";

export default function SearchAssistance() {
  const [value, setValue] = useState();
  const [participant, setParticipant] = useState("");
  const [inputValue, setInputValue] = useState("");

  const SearchInListAssistance = (newValue) => {
    const found = list.find((element) => element.nombre === newValue);
    setParticipant(found);
  };

  return (
    <div>
      <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
        <Box sx={{ p: 1, flexGrow: 1, bgcolor: "grey.300" }}>
          <Typography component="h5" variant="h5">
            Comprobar asistencia
          </Typography>
        </Box>
        <Box sx={{ p: 1, bgcolor: "grey.300" }}>
          <Chip
            variant="outlined"
            label={"Actualizado por ultima vez: " + lastUpdate}
          />
        </Box>
      </Box>
      <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
        <Typography>{inputValue && `Buscar: ${inputValue}`}</Typography>
        {value && (
          <>
            <Typography>Eventos:</Typography>
            {participant["inauguración"] && (
              <Typography>
                Inauguracion: {participant["inauguración"]}
              </Typography>
            )}
            {participant["taller1"] && (
              <Typography>Taller 1: {participant["taller1"]} </Typography>
            )}
            {participant["taller2"] && (
              <Typography>Taller 2: {participant["taller2"]}</Typography>
            )}
            {participant["taller3"] && (
              <Typography>Taller 3: {participant["taller3"]}</Typography>
            )}
            {participant["taller4"] && (
              <Typography>Taller 4: {participant["taller4"]}</Typography>
            )}
            {participant["taller5"] && (
              <Typography>Taller 5: {participant["taller5"]}</Typography>
            )}
            {participant["taller5"] && (
              <Typography>Taller 6: {participant["taller6"]}</Typography>
            )}
            {participant["taller6"] && (
              <Typography>Taller 7: {participant["taller7"]}</Typography>
            )}

            <Typography>
              Porcentaje de asistencia hasta el momento:
              {participant["porcentaje"]}
            </Typography>
          </>
        )}
      </Box>

      <Autocomplete
        value={value || null}
        onChange={(_, newValue) => {
          SearchInListAssistance(newValue);
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={list.map((option) => option.nombre)}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            {...params}
            label="Buscar Participante"
          />
        )}
      />
    </div>
  );
}
