import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";

export interface IImageCard {
  url: string;
  maxWidth?: number;
}

const ImageCard: React.FC<IImageCard> = ({ url, maxWidth }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: maxWidth ? `${maxWidth}px` : "250px",
        aspectRatio: "1/1",
        my: 2,
        mx: "auto",
      }}
    >
      <CardMedia
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        image={url}
      />
    </Card>
  );
};

export default ImageCard;
