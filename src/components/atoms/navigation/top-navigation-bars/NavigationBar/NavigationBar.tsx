import {
  AppBar,
  AppBarProps,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export interface INavigationBar {
  leftIconButton?: {
    onClick?: () => void;
    icon: string;
  };
  rightIconButton?: {
    onClick?: () => void;
    icon: string;
  };
  header?: string;
}

const NavigationBar: React.FC<INavigationBar & AppBarProps> = ({
  leftIconButton,
  rightIconButton,
  header,
  ...rest
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: rest.color === "transparent" ? "none" : undefined,
      }}
      {...rest}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent:
            !leftIconButton && !rightIconButton ? "center" : "space-between",
        }}
      >
        {leftIconButton && (
          <IconButton onClick={leftIconButton.onClick}>
            <Icon>{leftIconButton.icon}</Icon>
          </IconButton>
        )}
        <Typography variant="subtitle1">{header}</Typography>
        {rightIconButton && (
          <IconButton onClick={rightIconButton.onClick}>
            <Icon>{rightIconButton.icon}</Icon>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
