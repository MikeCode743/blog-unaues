import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip, TextField, Typography } from "@material-ui/core";
import { lastUpdate, list } from "../data/assitance";
import { Box } from "@mui/system";
import { Button, Icon } from "@mui/material";

export default function SearchAssistance() {
  const [value, setValue] = useState();
  const [participant, setParticipant] = useState("");
  const [inputValue, setInputValue] = useState("");

  const SearchInListAssistance = (newValue) => {
    const found = list.find((element) => element.nombre === newValue);
    setParticipant(found);
  };
  const formReport = {
    link: "https://forms.gle/ikFs9K5KFK9cfTKR7",
    icon: "report_gmailerrorred",
    color: "primary",
    text: "reportar",
  };

  return (
    <div>
      <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
        <Box sx={{ p: 1, flexGrow: 1, bgcolor: "grey.300" }}>
          <Typography component="h5" variant="h5">
            Comprobar asistencia
          </Typography>
        </Box>
        <Box sx={{ justifyContent: "flex-end", mx: 2 }}>
          <Button
            startIcon={<Icon>{formReport.icon}</Icon>}
            variant="contained"
            color={formReport.color}
            onClick={() => window.open(formReport.link, "_blank")}
          >
            {formReport.text}
          </Button>
        </Box>
      </Box>
      <Box mb={2} sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
        <Typography>{inputValue && `Buscar: ${inputValue}`}</Typography>
        {value && (
          <>
            {participant["asistencia"].map((element, index) => (
              <Typography>
                {index === 0 ? "Inauguracion: " : `Taller ${index}: `}
                {element ? "asistio" : "no asistio"}
              </Typography>
            ))}
            <Typography>
              Cantidad de eventos asistidos: {participant["contador"]}
            </Typography>
            <Typography>
              Porcentaje de asistencia hasta el momento: %
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
      <Box sx={{ display: "flex", mt: 2, justifyContent: "flex-end", mx: 2 }}>
        <Chip
          variant="outlined"
          label={"Actualizado por ultima vez: " + lastUpdate}
        />
      </Box>
    </div>
  );
}
