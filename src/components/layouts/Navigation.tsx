import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import config from "../../config/config";
import useAuth from "../../infrastructure/services/AuthProvider";
import NavDrawer from "../organisms/NavDrawer";
import NavBarAuthenticated from "../organisms/NavbarAuthenticated";
import NavBarUnauthenticated from "../organisms/NavbarUnauthenticated";

export default function PermanentDrawerLeft() {
  const { user } = useAuth();

  const pathname = usePathname();

  return (
    <>
      {pathname && !config.pagesWithoutToolbar.includes(pathname) && (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          {user ? <NavBarAuthenticated /> : <NavBarUnauthenticated />}

          {user && <NavDrawer />}

          <Toolbar sx={{ mb: 3.5 }} />
        </Box>
      )}
    </>
  );
}
