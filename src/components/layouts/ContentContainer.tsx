import { ReactNode } from "react";

import { useRouter } from "next/router";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

import config from "../../config/config";
import useAuth from "../../infrastructure/services/AuthProvider";
import { drawerWidth } from "../organisms/NavDrawer";

export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { user } = useAuth();
  const router = useRouter();
  return user &&
    !config.pagesWithoutContentContainer.includes(router.pathname) ? (
    <Box
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ justifyContent: "center", display: "flex" }}
      >
        {children}
      </Container>
    </Box>
  ) : (
    <>{children}</>
  );
}
