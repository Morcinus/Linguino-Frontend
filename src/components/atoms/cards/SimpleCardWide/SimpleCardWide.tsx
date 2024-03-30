import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export interface ISimpleCardWide {
  header: string;
  subheader?: string;
  imageUrl?: string;
  onClick?: () => void;
  imgSize?: number;
}

const SimpleCardWide: React.FC<ISimpleCardWide> = ({
  header,
  subheader,
  imageUrl,
  onClick,
  imgSize = 90,
}) => {
  const imageResolution = `${imgSize}px`;

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
          {imageUrl && (
            <CardMedia
              sx={{
                height: imageResolution,
                width: imageResolution,
                minWidth: imageResolution,
                minHeight: imageResolution,
              }}
              image={imageUrl}
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
