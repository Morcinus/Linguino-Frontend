import { useState } from "react";

import { useRouter } from "next/navigation";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import {
  Collapse,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { default as MUIDrawer } from "@mui/material/Drawer";

import { useTranslation } from "../../../../../i18n/client";
import { drawerWidth, lessons, levels, other, studying } from "./config";

export interface IDrawer {
  open: boolean;
  onClose: () => void;
}

const Drawer: React.FC<IDrawer> = ({ open, onClose }) => {
  const { t } = useTranslation("cs", "common");
  const router = useRouter();
  const [value, setValue] = useState<string>();
  const [lessonsOpen, setLessonsOpen] = useState(false);
  const [levelsOpen, setlevelsOpen] = useState(false);

  return (
    <MUIDrawer
      sx={{
        width: drawerWidth,
        gap: 0,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          overflow: "hidden",
          paddingRight: "8px",
          "&:hover": {
            overflowY: "scroll",
            paddingRight: 0,
          },
        },
        "*::-webkit-scrollbar": {
          width: "8px",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: 1,
        },
      }}
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          my: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#CECECE", // TODO změnit barvu na theme
          }}
        >
          {t("project-name")}
        </Typography>
        <Typography variant="subtitle2">
          English Course {/* TODO getnout text z course contextu */}
        </Typography>
      </Toolbar>
      <List sx={{ pt: 0 }}>
        <ListItemButton onClick={() => setlevelsOpen(!levelsOpen)}>
          <ListItemIcon>
            <FolderOpenIcon />
          </ListItemIcon>
          <ListItemText primary={t("navigation.levels")} />
          {levelsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={levelsOpen} timeout="auto" unmountOnExit>
          <List>
            {levels.map((item, i) => {
              return (
                <ListItem
                  disablePadding
                  key={`levels-${i}`}
                  selected={value === `levels-${i}`}
                >
                  <ListItemButton
                    onClick={() => {
                      setValue(`levels-${i}`);
                      router.push(item.path);
                    }}
                  >
                    <ListItemIcon>
                      <Icon>{item.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={t(item.label)} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>

        <ListItemButton onClick={() => setLessonsOpen(!lessonsOpen)}>
          <ListItemIcon>
            <FolderOpenIcon />
          </ListItemIcon>
          <ListItemText primary={t("navigation.lessons")} />
          {lessonsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={lessonsOpen} timeout="auto" unmountOnExit>
          <List>
            {lessons.map((item, i) => {
              return (
                <ListItem
                  disablePadding
                  key={`lessons-${i}`}
                  selected={value === `lessons-${i}`}
                >
                  <ListItemButton
                    onClick={() => {
                      setValue(`lessons-${i}`);
                      router.push(item.path);
                    }}
                  >
                    <ListItemIcon>
                      <Icon>{item.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={t(item.label)} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
        {studying.map((item, i) => {
          return (
            <ListItem
              disablePadding
              key={`studying-${i}`}
              selected={value === `studying-${i}`}
            >
              <ListItemButton
                onClick={() => {
                  setValue(`studying-${i}`);
                  router.push(item.path);
                }}
              >
                <ListItemIcon>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={t(item.label)} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {other.map((item, i) => {
          return (
            <ListItem
              disablePadding
              key={`other-${i}`}
              selected={value === `other-${i}`}
            >
              <ListItemButton
                onClick={() => {
                  setValue(`other-${i}`);
                  router.push(item.path);
                }}
              >
                <ListItemIcon>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={t(item.label)} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
