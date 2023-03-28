import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export interface ISimpleCardWide {
  header: string;
  subheader?: string;
  imageURL?: string;
  onClick?: () => void;
}

const SimpleCardWide: React.FC<ISimpleCardWide> = ({
  header,
  subheader,
  imageURL,
  onClick,
}) => {
  const imgSize = "90px";

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        sx={{
          p: 2,
        }}
        onClick={onClick}
      >
        <Box sx={{ display: "flex" }}>
          {imageURL && (
            <CardMedia
              sx={{
                height: imgSize,
                width: imgSize,
                minWidth: imgSize,
                minHeight: imgSize,
              }}
              image={imageURL}
            />
          )}
          <CardContent
            sx={{
              py: 0,
              "&:last-child": {
                paddingBottom: 0,
              },
            }}
          >
            <Typography variant="subtitle2">{header}</Typography>
            <Typography variant="body1">{subheader}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default SimpleCardWide;
