import * as React from "react";

import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CategoryIcon from "@mui/icons-material/Category";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExtensionIcon from "@mui/icons-material/Extension";
import GroupIcon from "@mui/icons-material/Group";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeIcon from "@mui/icons-material/Home";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import SettingsIcon from "@mui/icons-material/Settings";
import TranslateIcon from "@mui/icons-material/Translate";
import {
  Avatar,
  ListItemAvatar,
  ListSubheader,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

export const drawerWidth = 240;

export default function NavDrawer() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h5" sx={{ color: "#CECECE" }}>
          {t("project-name")}
        </Typography>
      </Toolbar>
      <List
        dense={true}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {t("menu")}
          </ListSubheader>
        }
        sx={{
          pr: 2,
          // selected and (selected + hover) states
          "&& .Mui-selected, && .Mui-selected:hover": {
            borderRadius: "0 12px 12px 0",
            fontWeight: "bold",
          },
          // hover states
          "& .MuiListItemButton-root:hover": {
            borderRadius: "0 12px 12px 0",
          },
        }}
      >
        <ListItem disablePadding>
          <Link href="/">
            <ListItemButton selected={router.pathname === "/"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E0E0E0" }}>
                  <HomeIcon sx={{ color: "#818181" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("home")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "#414141",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/groups">
            <ListItemButton selected={router.pathname === "/groups"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E0E0E0" }}>
                  <GroupIcon sx={{ color: "#818181" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("groups")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "#414141",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>

      <Divider />

      <List
        dense={true}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {t("studying.studying")}
          </ListSubheader>
        }
        sx={{
          pr: 2,
          // selected and (selected + hover) states
          "&& .Mui-selected, && .Mui-selected:hover": {
            borderRadius: "0 12px 12px 0",
          },
          // hover states
          "& .MuiListItemButton-root:hover": {
            borderRadius: "0 12px 12px 0",
          },
        }}
      >
        <ListItem
          disablePadding
          sx={{
            // selected and (selected + hover) states
            "&& .Mui-selected, && .Mui-selected:hover": {
              backgroundColor: "#fff9c4",
            },
          }}
        >
          <Link href="/speaking">
            <ListItemButton selected={router.pathname === "/speaking"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "speaking.main" }}>
                  <RecordVoiceOverIcon sx={{ color: "speaking.light" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("studying.speaking")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "speaking.dark",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem
          disablePadding
          sx={{
            // selected and (selected + hover) states
            "&& .Mui-selected, && .Mui-selected:hover": {
              backgroundColor: "#FBE5C9",
            },
          }}
        >
          <Link href="/pronunciation">
            <ListItemButton selected={router.pathname === "/pronunciation"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "pronunciation.main" }}>
                  <TranslateIcon sx={{ color: "pronunciation.light" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("studying.pronunciation")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "pronunciation.dark",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            // selected and (selected + hover) states
            "&& .Mui-selected, && .Mui-selected:hover": {
              backgroundColor: "#C5F2C7",
            },
          }}
        >
          <Link href="/vocabulary">
            <ListItemButton selected={router.pathname === "/vocabulary"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "vocabulary.main" }}>
                  <ExtensionIcon sx={{ color: "vocabulary.light" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("studying.vocabulary")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "vocabulary.dark",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem
          disablePadding
          sx={{
            // selected and (selected + hover) states
            "&& .Mui-selected, && .Mui-selected:hover": {
              backgroundColor: "#C5DCFA",
            },
          }}
        >
          <Link href="/grammar">
            <ListItemButton selected={router.pathname === "/grammar"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "grammar.main" }}>
                  <CategoryIcon sx={{ color: "grammar.light" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("studying.grammar")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "grammar.dark",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            // selected and (selected + hover) states
            "&& .Mui-selected, && .Mui-selected:hover": {
              backgroundColor: "#c5cae9",
            },
          }}
        >
          <Link href="/reading">
            <ListItemButton selected={router.pathname === "/reading"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "reading.main" }}>
                  <AutoStoriesIcon sx={{ color: "reading.light" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("studying.reading")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "reading.dark",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            // selected and (selected + hover) states
            "&& .Mui-selected, && .Mui-selected:hover": {
              backgroundColor: "#ECB9F9",
            },
          }}
        >
          <Link href="/listening">
            <ListItemButton selected={router.pathname === "/listening"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "listening.main" }}>
                  <HeadphonesIcon sx={{ color: "listening.light" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("studying.listening")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "listening.dark",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>

      <Divider />
      <List
        dense={true}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {t("other.other")}
          </ListSubheader>
        }
        sx={{
          pr: 2,
          // selected and (selected + hover) states
          "&& .Mui-selected, && .Mui-selected:hover": {
            borderRadius: "0 12px 12px 0",
            fontWeight: "bold",
          },
          // hover states
          "& .MuiListItemButton-root:hover": {
            borderRadius: "0 12px 12px 0",
          },
        }}
      >
        <ListItem disablePadding>
          <Link href="/extend-subscription">
            <ListItemButton
              selected={router.pathname === "/extend-subscription"}
            >
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E0E0E0" }}>
                  <AccountBalanceWalletIcon sx={{ color: "#818181" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("other.subscription")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "#414141",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/help">
            <ListItemButton selected={router.pathname === "/help"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E0E0E0" }}>
                  <HelpOutlineOutlinedIcon sx={{ color: "#818181" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("other.help")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "#414141",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/changelog">
            <ListItemButton selected={router.pathname === "/changelog"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E0E0E0" }}>
                  <ExploreOutlinedIcon sx={{ color: "#818181" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("other.news")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "#414141",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/settings">
            <ListItemButton selected={router.pathname === "/settings"}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E0E0E0" }}>
                  <SettingsIcon sx={{ color: "#818181" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("other.settings")}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "#414141",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
