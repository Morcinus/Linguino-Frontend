import config from "config/config";
import useAuth from "infrastructure/services/AuthProvider";
import theme from "styles/theme";

import { usePathname } from "next/navigation";

import { Box, CssBaseline, Toolbar, useMediaQuery } from "@mui/material";

import DrawerContainer from "../drawer/DrawerContainer/DrawerContainer";
import BottomNavigationBar from "../main-navigation-bars/BottomNavigationBar/BottomNavigationBar";
import SideNavigationBar from "../main-navigation-bars/SideNavigationBar/SideNavigationBar";
import DefaultNavigationBar from "../top-navigation-bars/DefaultNavigationBar/DefaultNavigationBar";
import LessonsNavigationBar from "../top-navigation-bars/LessonsNavigationBar/LessonsNavigationBar";
import UnauthenticatedNavigationBar from "../top-navigation-bars/UnauthenticatedNavigationBar/UnauthenticatedNavigationBar";

export interface INavigation {}

const Navigation: React.FC<INavigation> = () => {
  const { user } = useAuth();

  const pathname = usePathname();

  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  function renderNavBar(pathname: string) {
    switch (pathname) {
      case "/lessons":
        return <DrawerContainer child={{ component: LessonsNavigationBar }} />;
      default:
        return <DrawerContainer child={{ component: DefaultNavigationBar }} />;
    }
  }

  return (
    <>
      {pathname && !config.pagesWithoutToolbar.includes(pathname) && (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          {user ? renderNavBar(pathname) : <UnauthenticatedNavigationBar />}

          {user ? (
            desktop === true ? (
              <SideNavigationBar />
            ) : (
              <BottomNavigationBar />
            )
          ) : undefined}
        </Box>
      )}

      <Toolbar />
    </>
  );
};

export default Navigation;
