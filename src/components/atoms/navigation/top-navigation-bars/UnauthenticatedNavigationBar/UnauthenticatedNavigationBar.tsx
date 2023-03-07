import { useTranslation } from "i18n/client";

import Link from "next/link";

import { AppBar, Box, Button, CssBaseline, Toolbar } from "@mui/material";

export interface IUnauthenticatedNavigationBar {}

const UnauthenticatedNavigationBar: React.FC<
  IUnauthenticatedNavigationBar
> = () => {
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
};

export default UnauthenticatedNavigationBar;
