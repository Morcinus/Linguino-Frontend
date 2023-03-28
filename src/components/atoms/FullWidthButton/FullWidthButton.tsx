import theme from "styles/theme";

import { MouseEvent } from "react";

import { Button, ButtonProps, Toolbar, useMediaQuery } from "@mui/material";

export interface IFullWidthButton {
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  buttonVariant?: "right" | "wrong";
  children?: React.ReactNode;
}

const FullWidthButton: React.FC<IFullWidthButton & ButtonProps> = ({
  children,
  onClick,
  buttonVariant,
  ...rest
}) => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {desktop ? (
        <Button
          onClick={(e) => onClick?.(e)}
          variant="contained"
          size="large"
          fullWidth
          sx={{ maxWidth: "300px", alignSelf: "center" }}
          {...rest}
        >
          {children}
        </Button>
      ) : (
        <>
          {/* Toolbar creates the right offset so that Button doesn't overlay the page content */}
          <Toolbar />

          <Button
            onClick={(e) => onClick?.(e)}
            variant="contained"
            size="large"
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              borderRadius: 0,
            }}
            color={
              buttonVariant === "right"
                ? "success"
                : buttonVariant === "wrong"
                ? "error"
                : "primary"
            }
            {...rest}
          >
            {children}
          </Button>
        </>
      )}
    </>
  );
};

export default FullWidthButton;
