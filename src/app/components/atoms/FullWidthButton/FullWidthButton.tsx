import { Button } from "@mui/material";

export interface IFullWidthButton {
  text?: string;
  onClick?: Function;
  disabled?: boolean;
  variant?: "right" | "wrong";
}

const FullWidthButton: React.FC<IFullWidthButton> = ({
  text,
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
      {text}
    </Button>
  );
};

export default FullWidthButton;
