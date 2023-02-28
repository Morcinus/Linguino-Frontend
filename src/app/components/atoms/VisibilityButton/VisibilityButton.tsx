import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";

export interface IVisibilityButton {
  onClick?: () => void;
  active: boolean;
}

const VisibilityButton: React.FC<IVisibilityButton> = ({ onClick, active }) => {
  return (
    <IconButton onClick={() => onClick?.()}>
      {active ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
    </IconButton>
  );
};

export default VisibilityButton;
