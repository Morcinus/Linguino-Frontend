import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBarUnauthenticated() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" color="neutral">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Unuthenticated
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
