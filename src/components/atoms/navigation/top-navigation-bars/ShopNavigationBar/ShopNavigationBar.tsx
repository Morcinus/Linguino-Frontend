import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";
import icons from "styles/icons";
import theme from "styles/theme";

import { AppBarProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import Twemoji from "components/atoms/Twemoji/Twemoji";

import { IDrawerController } from "../../drawer/DrawerContainer/DrawerContainer";
import { SIDE_NAV_BAR_WIDTH } from "../../main-navigation-bars/SideNavigationBar/SideNavigationBar";

export interface IShopNavigationBar extends IDrawerController {}

const ShopNavigationBar: React.FC<IShopNavigationBar & AppBarProps> = ({
  onDrawerOpen,
  ...rest
}) => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("cs", "common");
  const { user } = useAuth();

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: rest.color === "transparent" ? "none" : undefined,
        backgroundColor: "background.paper",
      }}
      {...rest}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton onClick={onDrawerOpen}>
            <Icon>{icons.menu}</Icon>
          </IconButton>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            pl: desktop ? `${SIDE_NAV_BAR_WIDTH}px` : undefined,
          }}
        >
          {t("navigation.shop")}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {user?.balance && (
            <>
              <Typography variant="subtitle2">{user?.balance}</Typography>
              <Twemoji emoji="🪙" />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ShopNavigationBar;
