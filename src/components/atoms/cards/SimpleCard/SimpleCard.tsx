import theme from "styles/theme";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Icon,
  Typography,
} from "@mui/material";

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
