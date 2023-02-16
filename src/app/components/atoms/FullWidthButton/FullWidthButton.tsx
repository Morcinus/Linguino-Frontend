import { Button } from "@mui/material";

export interface IFullWidthButton {
  onClick?: Function;
  disabled?: boolean;
  variant?: "right" | "wrong";
  children?: React.ReactNode;
}

const FullWidthButton: React.FC<IFullWidthButton> = ({
  children,
  onClick,
  disabled,
  variant,
}) => {
  return (
    <Button
      onClick={(e) => onClick?.(e)}
      variant="contained"
      disabled={disabled}
      size="large"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        borderRadius: 0,
      }}
      color={
        variant === "right"
          ? "success"
          : variant === "wrong"
          ? "error"
          : "primary"
      }
    >
      {children}
    </Button>
  );
};

export default FullWidthButton;
