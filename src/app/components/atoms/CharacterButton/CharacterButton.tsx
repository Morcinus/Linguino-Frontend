import { Button, Typography } from "@mui/material";

export interface ICharacterButton {
  onClick: () => void;
  character: string;
}

const CharacterButton: React.FC<ICharacterButton> = ({
  onClick,
  character,
}) => {
  return (
    <Button
      variant="outlined"
      color="inherit"
      sx={{
        maxWidth: "35px",
        maxHeight: "35px",
        minWidth: "35px",
        minHeight: "35px",
        borderRadius: 0.2,
      }}
      onClick={onClick}
    >
      <Typography variant="h5">{character}</Typography>
    </Button>
  );
};

export default CharacterButton;
