import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";
import icons from "styles/icons";

import {
  AppBar,
  AppBarProps,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import Streak from "components/atoms/Streak/Streak";

import { IDrawerController } from "../../drawer/DrawerContainer/DrawerContainer";

export interface IHomeNavigationBar extends IDrawerController {}

const HomeNavigationBar: React.FC<IHomeNavigationBar & AppBarProps> = ({
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
        {user && user.lastViewedStudyMapLevel && (
          <Typography variant="subtitle1">
            {t(`levels.${user.lastViewedStudyMapLevel}`)}
          </Typography>
        )}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {user?.streak && user?.completedDailyGoal && (
            <Streak
              streak={user.streak}
              completedDailyGoal={user.completedDailyGoal}
            />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HomeNavigationBar;