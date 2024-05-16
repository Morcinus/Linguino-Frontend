import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const primaryNavigation = [
  {
    label: "navigation.home",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  /* Isn't implemented on backend in v1.0.0
  {
    label: "navigation.shop",
    icon: <ShoppingCartOutlinedIcon />,
    path: "/shop",
  }, */
  /* Isn't implemented on backend in v1.0.0  {
    label: "navigation.challenges",
    icon: <WorkspacePremiumOutlinedIcon />,
    path: "/challenges",
  }, */
  /* Isn't implemented on backend in v1.0.0 {
    label: "navigation.feed",
    icon: <FeedOutlinedIcon />,
    path: "/feed",
  }, */
  {
    label: "navigation.profile",
    icon: <PersonOutlineOutlinedIcon />,
    path: "/profile",
  },
];
