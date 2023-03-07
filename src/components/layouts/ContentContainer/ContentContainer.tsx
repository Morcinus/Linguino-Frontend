import config from "config/config";
import useAuth from "infrastructure/services/AuthProvider";
import theme from "styles/theme";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import { Box, Container, useMediaQuery } from "@mui/material";

import { BOTTOM_NAV_BAR_HEIGHT } from "components/atoms/navigation/main-navigation-bars/BottomNavigationBar/BottomNavigationBar";
import { SIDE_NAV_BAR_WIDTH } from "components/atoms/navigation/main-navigation-bars/SideNavigationBar/SideNavigationBar";

export interface IContentContainer {
  children?: ReactNode;
}

const ContentContainer: React.FC<IContentContainer> = ({ children }) => {
  const { user } = useAuth();
  const pathname = usePathname();

  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return user &&
    pathname &&
    !config.pagesWithoutContentContainer.includes(pathname) ? (
    <Box
      sx={{
        pt: 3,
        minHeight: "100vh",
        pl: desktop ? SIDE_NAV_BAR_WIDTH : undefined,
        pb: !desktop ? BOTTOM_NAV_BAR_HEIGHT : undefined,
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
};

export default ContentContainer;
