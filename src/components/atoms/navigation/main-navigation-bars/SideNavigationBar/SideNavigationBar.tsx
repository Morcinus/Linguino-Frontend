import { useState } from "react";

import { useRouter } from "next/navigation";

import { Box, Tab, Tabs } from "@mui/material";

import { useTranslation } from "../../../../../i18n/client";
import { primaryNavigation } from "../../config";

export interface ISideNavigationBar {}

export const SIDE_NAV_BAR_WIDTH = "90px";

const SideNavigationBar: React.FC<ISideNavigationBar> = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation("cs", "common");
  const router = useRouter();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        height: "100%",
        width: SIDE_NAV_BAR_WIDTH,
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
          router.push(primaryNavigation[newValue].path);
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
