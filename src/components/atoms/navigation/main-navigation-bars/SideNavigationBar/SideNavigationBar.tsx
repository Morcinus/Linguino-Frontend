import useAuth from "infrastructure/services/AuthProvider";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { useTranslation } from "../../../../../i18n/client";
import { primaryNavigation } from "../../config";

export interface ISideNavigationBar {}

export const SIDE_NAV_BAR_WIDTH = 90;

const SideNavigationBar: React.FC<ISideNavigationBar> = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation("cs", "common");
  const router = useRouter();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        height: "100%",
        width: `${SIDE_NAV_BAR_WIDTH}px`,
        position: "fixed",
        left: 0,
        top: 0,
        backgroundColor: "background.paper",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);

          if (primaryNavigation[newValue].path === "/profile")
            router.push(`/users/${user?.id}`);
          else router.push(primaryNavigation[newValue].path);
        }}
        sx={{
          boxShadow: "2px 0 0 0 rgba(0,0,0,0.09)",
          pt: "64px",
        }}
        TabIndicatorProps={{ style: { background: "rgba(0,0,0,0)" } }}
      >
        {primaryNavigation.map((item, i) => (
          <Tab
            label={t(item.label)}
            icon={item.icon}
            sx={{ p: 0, textTransform: "none" }}
            key={i}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default SideNavigationBar;
