import { TypographyVariant } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export interface IDividerWithText {
  text: string;
  variant?: TypographyVariant;
}

const DividerWithText: React.FC<IDividerWithText> = ({ text, variant }) => {
  return (
    <Divider>
      <Typography variant={variant}>{text}</Typography>
    </Divider>
  );
};

export default DividerWithText;
