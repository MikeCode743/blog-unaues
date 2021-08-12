import {
  AppBar,
  Button,
  Grid,
  Icon,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { data } from "../data/navbar";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar style={{ background: "#63A64D" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography component="h6" variant="h6">
            {data.title}
          </Typography>
          <Grid item>
            {data.buttons.map((b) => (
              <Button
                key={b.text}
                startIcon={<Icon>{b.icon}</Icon>}
                color={b.color}
                href={b.link}
              >
                {b.text}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
