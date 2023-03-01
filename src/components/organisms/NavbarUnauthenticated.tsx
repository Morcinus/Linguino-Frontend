import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import { useTranslation } from "../../i18n/client";

export default function NavBarUnauthenticated() {
  const { t } = useTranslation("cs", "common");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" color="neutral">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Link href="/login">
            <Button color="inherit" size="large">
              {t("login")}
            </Button>
          </Link>
          <Link href="/signup">
            <Button color="inherit" size="large">
              {t("signup")}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
