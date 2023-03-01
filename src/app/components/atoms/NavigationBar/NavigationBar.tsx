import * as MUIcon from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export interface INavigationBar {
  leftIconButton?: {
    onClick?: () => void;
    icon: keyof typeof MUIcon;
  };
  rightIconButton?: {
    onClick?: () => void;
    icon: keyof typeof MUIcon;
  };
  header?: string;
  variant?: "transparent" | "primary";
}

const NavigationBar: React.FC<INavigationBar> = ({
  leftIconButton,
  rightIconButton,
  header,
  variant = "primary",
}) => {
  const LeftIcon = leftIconButton && MUIcon[leftIconButton.icon];
  const RightIcon = rightIconButton && MUIcon[rightIconButton.icon];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: variant === "primary" ? "primary" : "rgba(0,0,0,0);",
        boxShadow: variant === "transparent" ? "none" : undefined,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {leftIconButton && (
          <IconButton onClick={leftIconButton.onClick}>
            {LeftIcon && <LeftIcon />}
          </IconButton>
        )}
        <Typography variant="subtitle1">{header}</Typography>
        {rightIconButton && (
          <IconButton onClick={rightIconButton.onClick}>
            {RightIcon && <RightIcon />}
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
