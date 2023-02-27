import { Box } from "@mui/material";

export interface IYouTubeVideoEmbed {
  videoId?: string;
}

const YouTubeVideoEmbed: React.FC<IYouTubeVideoEmbed> = ({ videoId }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {videoId && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen
          style={{
            aspectRatio: "16 / 9",
            width: "100%",
            border: 0,
            maxWidth: "600px",
          }}
        />
      )}
    </Box>
  );
};

export default YouTubeVideoEmbed;
