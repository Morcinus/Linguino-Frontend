import React, { ReactNode } from "react";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

import useAuth from "../util/useAuth";
import { drawerWidth } from "./NavDrawer";

export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { user } = useAuth();
  return (
    <Box
      sx={{
        width: user ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: user ? `${drawerWidth}px` : 0,
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
