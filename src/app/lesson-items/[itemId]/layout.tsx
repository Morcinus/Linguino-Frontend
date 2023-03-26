// prettier-ignore
"use client"

import { Box } from "@mui/material";

import ProtectedRoute from "components/layouts/authentication/ProtectedRoute/ProtectedRoute";
import ContentContainer from "components/layouts/ContentContainer/ContentContainer";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <ProtectedRoute>
      <ContentContainer>
        <Box sx={{ pt: 8, width: "100%" }}>{children}</Box>
      </ContentContainer>
    </ProtectedRoute>
  );
};

export default Layout;
