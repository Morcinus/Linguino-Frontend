import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";
import icons from "styles/icons";

import { AppBarProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { IDrawerController } from "../../drawer/DrawerContainer/DrawerContainer";

export interface IShopNavigationBar extends IDrawerController {}

const ShopNavigationBar: React.FC<IShopNavigationBar & AppBarProps> = ({
  onDrawerOpen,
  ...rest
}) => {
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
        <Typography variant="subtitle1">{t("navigation.shop")}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {user?.balance && (
            <>
              <Typography variant="subtitle2">{user?.balance}</Typography>
              <Icon>{icons.coins}</Icon>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ShopNavigationBar;
