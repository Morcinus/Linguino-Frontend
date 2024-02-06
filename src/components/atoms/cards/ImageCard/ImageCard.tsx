import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export interface IImageCard {
  url: string;
}

const ImageCard: React.FC<IImageCard> = ({ url }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "250px",
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
