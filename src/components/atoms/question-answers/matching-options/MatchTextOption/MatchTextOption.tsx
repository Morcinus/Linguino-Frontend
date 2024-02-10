import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./MatchTextOption.module.css";

export interface IMatchTextOption {
  text: string;
  selected?: boolean;
  disabled?: boolean;
  animateWrong?: boolean;
  onClick?: () => void;
}

const MatchTextOption: React.FC<IMatchTextOption> = ({
  text,
  selected,
  disabled,
  animateWrong,
  onClick,
}) => {
  return (
    <Box className={animateWrong ? `${styles.shake}` : undefined}>
      <Button
        variant={"contained"}
        color={"neutral"}
        sx={{
          borderRadius: 0.2,
          backgroundColor: "neutral",

          borderStyle: selected === true ? "solid" : undefined,
          borderWidth: selected === true ? 2 : undefined,
          borderColor: selected === true ? "primary.main" : undefined,
          py: 1.5,
        }}
        fullWidth
        onClick={onClick}
        disabled={disabled}
        size="large"
      >
        <Typography variant="h6" sx={{ textTransform: "none" }}>
          {text}
        </Typography>
      </Button>
    </Box>
  );
};

export default MatchTextOption;
