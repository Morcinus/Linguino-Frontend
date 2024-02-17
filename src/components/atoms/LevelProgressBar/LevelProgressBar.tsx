import icons from "styles/icons";
import theme from "styles/theme";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import IconContainer from "../IconContainer/IconContainer";

export interface ILevelProgressBar {
  progress: number;
}

const LevelProgressBar: React.FC<ILevelProgressBar> = ({ progress }) => {
  const mobileIconSizes = ["30px", "40px", "54px", "40px", "30px"];
  const desktopIconSizes = ["40px", "50px", "64px", "50px", "40px"];

  console.log("progress", progress);

  function fillStar(starIndex: number) {
    return (5 * progress) / 100 >= starIndex + 1;
  }

  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  function renderStars() {
    const iconSizes = desktop ? desktopIconSizes : mobileIconSizes;

    return iconSizes.map((size, i) => (
      <>
        {fillStar(i) ? (
          <IconContainer
            key={i}
            sx={{
              fontSize: size,
              textShadow: "0px 0px 5px rgba(0,0,0,0.2)",
              color: "#FFD700",
            }}
            name={icons.starFilled}
          />
        ) : (
          <IconContainer
            key={i}
            sx={{
              fontSize: size,
              color: "#383838",
            }}
            name={icons.star}
          />
        )}
      </>
    ));
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      {renderStars()}
    </Box>
  );
};

export default LevelProgressBar;
