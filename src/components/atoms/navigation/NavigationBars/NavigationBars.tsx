import config from "config/config";
import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";
import theme from "styles/theme";

import { usePathname } from "next/navigation";

import { Box, CssBaseline, Toolbar, useMediaQuery } from "@mui/material";

import DrawerContainer from "../drawer/DrawerContainer/DrawerContainer";
import BottomNavigationBar from "../main-navigation-bars/BottomNavigationBar/BottomNavigationBar";
import SideNavigationBar from "../main-navigation-bars/SideNavigationBar/SideNavigationBar";
import BackNavigationBar from "../top-navigation-bars/BackNavigationBar/BackNavigationBar";
import DefaultNavigationBar from "../top-navigation-bars/DefaultNavigationBar/DefaultNavigationBar";
import LessonsNavigationBar from "../top-navigation-bars/LessonsNavigationBar/LessonsNavigationBar";
import ShopNavigationBar from "../top-navigation-bars/ShopNavigationBar/ShopNavigationBar";
import UnauthenticatedNavigationBar from "../top-navigation-bars/UnauthenticatedNavigationBar/UnauthenticatedNavigationBar";

export interface INavigation {}

const Navigation: React.FC<INavigation> = () => {
  const { user } = useAuth();

  const { t } = useTranslation("cs", "common");

  const pathname = usePathname();

  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  function renderNavBar(pathname: string) {
    if (/\/users\/.*\/followers/.test(pathname)) return <BackNavigationBar />;
    if (/^\/help\//.test(pathname)) return <BackNavigationBar />;
    if (/^\/help/.test(pathname))
      return (
        <DrawerContainer
          child={{
            component: DefaultNavigationBar,
            props: { header: t("navigation.help") },
          }}
        />
      );
    if (/^\/lesson-items\//.test(pathname)) return <BackNavigationBar />;

    switch (pathname) {
      case "/lessons":
        return <DrawerContainer child={{ component: LessonsNavigationBar }} />;
      case "/shop":
        return <DrawerContainer child={{ component: ShopNavigationBar }} />;
      case "/favorites":
        return <BackNavigationBar header="favorites" />;
      case "/challenges":
        return (
          <DrawerContainer
            child={{
              component: DefaultNavigationBar,
              props: {
                header: t("navigation.challenges"),
              },
            }}
          />
        );
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
