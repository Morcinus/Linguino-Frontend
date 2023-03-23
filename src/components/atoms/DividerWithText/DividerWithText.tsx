import { Divider, Typography, TypographyVariant } from "@mui/material";

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
