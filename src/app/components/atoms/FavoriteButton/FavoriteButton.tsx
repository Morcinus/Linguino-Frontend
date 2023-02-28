import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

export interface IFavoriteButton {
  onClick?: () => void;
  active: boolean;
}

const FavoriteButton: React.FC<IFavoriteButton> = ({ onClick, active }) => {
  return (
    <IconButton onClick={() => onClick?.()}>
      {active ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoriteButton;
