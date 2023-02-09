import { Button } from "@mui/material";

export interface IFullWidthButton {
  text?: string;
  onClick?: Function;
  disabled?: boolean;
}

const FullWidthButton: React.FC<IFullWidthButton> = ({
  text,
  onClick,
  disabled,
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
    >
      {text}
    </Button>
  );
};

export default FullWidthButton;
