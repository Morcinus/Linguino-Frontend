import theme from "styles/theme";

import Fab from "@mui/material/Fab";
import useMediaQuery from "@mui/material/useMediaQuery";

import IconContainer from "../IconContainer/IconContainer";
import { BOTTOM_NAV_BAR_HEIGHT } from "../navigation/main-navigation-bars/BottomNavigationBar/BottomNavigationBar";

export interface IBottomFab {
  header?: string;
  icon?: string;
  onClick?: () => void;
}

const BottomFab: React.FC<IBottomFab> = ({ icon, onClick, header }) => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Fab
      variant="extended"
      color="primary"
      sx={{
        position: "fixed",
        right: 16,
        bottom: desktop ? 16 : `${16 + BOTTOM_NAV_BAR_HEIGHT}px`,
      }}
      onClick={onClick}
    >
      {header}
      {icon && <IconContainer sx={{ ml: 1 }} name={icon} />}
    </Fab>
  );
};

export default BottomFab;
