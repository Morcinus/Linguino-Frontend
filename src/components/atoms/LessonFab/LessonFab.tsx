import theme from "styles/theme";

import { Fab, Icon, useMediaQuery } from "@mui/material";

import { useTranslation } from "../../../i18n/client";
import { BOTTOM_NAV_BAR_HEIGHT } from "../navigation/main-navigation-bars/BottomNavigationBar/BottomNavigationBar";

export interface ILessonFab {
  icon?: string;
  onClick?: () => void;
}

const LessonFab: React.FC<ILessonFab> = ({ icon, onClick }) => {
  const { t } = useTranslation("cs", "common");
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Fab
      variant="extended"
      color="primary"
      sx={{
        position: "fixed",
        right: 16,
        bottom: desktop ? 16 : `${16 + BOTTOM_NAV_BAR_HEIGHT}`,
      }}
      onClick={onClick}
    >
      {t("study")}
      <Icon sx={{ ml: 1 }}>{icon}</Icon>
    </Fab>
  );
};

export default LessonFab;
