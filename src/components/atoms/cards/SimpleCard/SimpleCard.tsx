import theme from "styles/theme";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";

export interface ISimpleCard {
  header: string;
  headerIcon?: string;
  imageURL: string;
  onClick: () => void;
  highlightCard?: boolean;
  highlightVariant?: "text" | "outlined";
}

const SimpleCard: React.FC<ISimpleCard> = ({
  header,
  headerIcon,
  imageURL,
  onClick,
  highlightCard,
  highlightVariant,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 150,
        maxHeight: 150,
        outline:
          highlightCard && highlightVariant === "outlined"
            ? `4px solid ${theme.palette.primary.main}`
            : undefined,
      }}
    >
      <CardActionArea
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
        onClick={onClick}
      >
        <CardMedia
          sx={{ height: "100px", width: "100px", mx: 2, mt: 1 }}
          image={imageURL}
        />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            p: 1,
          }}
        >
          <Typography
            variant="subtitle2"
            color={highlightCard ? "primary" : undefined}
          >
            {header}
          </Typography>
          {headerIcon && <Icon>{headerIcon}</Icon>}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SimpleCard;
