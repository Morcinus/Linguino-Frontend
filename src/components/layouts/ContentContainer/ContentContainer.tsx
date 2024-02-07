import config from "config/config";
import useAuth from "infrastructure/services/AuthProvider";
import theme from "styles/theme";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

import { BOTTOM_NAV_BAR_HEIGHT } from "components/atoms/navigation/main-navigation-bars/BottomNavigationBar/BottomNavigationBar";
import { SIDE_NAV_BAR_WIDTH } from "components/atoms/navigation/main-navigation-bars/SideNavigationBar/SideNavigationBar";

export interface IContentContainer {
  children?: ReactNode;
  disablePadding?: boolean;
}

const ContentContainer: React.FC<IContentContainer> = ({
  children,
  disablePadding = false,
}) => {
  const { user } = useAuth();
  const pathname = usePathname();

  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return user &&
    pathname &&
    !config.pagesWithoutContentContainer.includes(pathname) ? (
    <Box
      sx={{
        pt: disablePadding ? undefined : 3,
        minHeight: "100vh",
        pl: desktop ? `${SIDE_NAV_BAR_WIDTH}px` : undefined,
        pb: !desktop ? `${BOTTOM_NAV_BAR_HEIGHT}px` : undefined,
      }}
    >
      <Container
        maxWidth="sm"
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
