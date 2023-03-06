import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

export const primaryNavigation = [
  {
    label: "navigation.home",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    label: "navigation.shop",
    icon: <ShoppingCartOutlinedIcon />,
    path: "/shop",
  },
  {
    label: "navigation.challenges",
    icon: <WorkspacePremiumOutlinedIcon />,
    path: "/challenges",
  },
  {
    label: "navigation.feed",
    icon: <FeedOutlinedIcon />,
    path: "/feed",
  },
  {
    label: "navigation.profile",
    icon: <PersonOutlineOutlinedIcon />,
    path: "/profile",
  },
  {
    label: "navigation.premium",
    icon: <OfflineBoltOutlinedIcon />,
    path: "/premium",
  },
];
