"use client"

import { Box } from "@mui/material";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return <Box sx={{pt: 8}}>{children}</Box>;
};

export default Layout;
