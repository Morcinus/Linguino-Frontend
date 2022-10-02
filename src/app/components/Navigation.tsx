import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import useAuth from "../../util/hooks/useAuth";
import NavDrawer from "./NavDrawer";
import NavBarAuthenticated from "./NavbarAuthenticated";
import NavBarUnauthenticated from "./NavbarUnauthenticated";

export default function PermanentDrawerLeft() {
  const { user } = useAuth();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {user ? <NavBarAuthenticated /> : <NavBarUnauthenticated />}

      {user && <NavDrawer />}

      <Toolbar sx={{ mb: 3.5 }} />
    </Box>
  );
}
