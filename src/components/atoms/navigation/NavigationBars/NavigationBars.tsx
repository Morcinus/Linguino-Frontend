"use client"

import config from "config/config";
import useAuth from "infrastructure/services/AuthProvider";
import theme from "styles/theme";

import { usePathname } from "next/navigation";

import { Box, CssBaseline, useMediaQuery } from "@mui/material";

import DrawerContainer from "../drawer/DrawerContainer/DrawerContainer";
import BottomNavigationBar from "../main-navigation-bars/BottomNavigationBar/BottomNavigationBar";
import SideNavigationBar from "../main-navigation-bars/SideNavigationBar/SideNavigationBar";
import DefaultNavigationBar from "../top-navigation-bars/DefaultNavigationBar/DefaultNavigationBar";
import UnauthenticatedNavigationBar from "../top-navigation-bars/UnauthenticatedNavigationBar/UnauthenticatedNavigationBar";

export interface INavigation {}

const Navigation: React.FC<INavigation> = () => {
  const { user } = useAuth();

  const pathname = usePathname();

  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {pathname && !config.pagesWithoutToolbar.includes(pathname) && (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          {user ? (
            <DrawerContainer child={{ component: DefaultNavigationBar }} />
          ) : (
            <UnauthenticatedNavigationBar />
          )}

          {user ? (
            desktop === true ? (
              <SideNavigationBar />
            ) : (
              <BottomNavigationBar />
            )
          ) : undefined}
        </Box>
      )}
    </>
  );
};

export default Navigation;
