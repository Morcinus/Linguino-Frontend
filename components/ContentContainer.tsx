import React, { ReactNode } from "react";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

import useAuth from "../util/hooks/useAuth";
import { drawerWidth } from "./NavDrawer";

export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { user } = useAuth();
  return user ? (
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
