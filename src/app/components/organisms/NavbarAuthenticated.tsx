import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import NavbarMenu from "../molecules/NavbarMenu";
import Streak from "../molecules/Streak";

const drawerWidth = 240;

export default function NavBarAuthenticated() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        color="neutral"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Streak />
          <NavbarMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
