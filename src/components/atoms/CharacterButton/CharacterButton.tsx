import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export interface ICharacterButton {
  onClick: () => void;
  character: string;
  disabled?: boolean;
  elevated?: boolean;
}

export const CHARACTER_BUTTON_SIZE = 35;

const CharacterButton: React.FC<ICharacterButton> = ({
  onClick,
  character,
  disabled,
  elevated,
}) => {
  return (
    <Button
      variant={elevated ? "contained" : "outlined"}
      color={elevated ? "neutral" : "inherit"}
      sx={{
        maxWidth: `${CHARACTER_BUTTON_SIZE}px`,
        maxHeight: `${CHARACTER_BUTTON_SIZE}px`,
        minWidth: `${CHARACTER_BUTTON_SIZE}px`,
        minHeight: `${CHARACTER_BUTTON_SIZE}px`,
        borderRadius: 0.2,
        backgroundColor: elevated ? "neutral" : undefined,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography variant="h5">{character}</Typography>
    </Button>
  );
};

export default CharacterButton;
