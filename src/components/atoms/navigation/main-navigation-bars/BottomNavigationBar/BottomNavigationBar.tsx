import { useState } from "react";

import { useRouter } from "next/navigation";

import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

import { useTranslation } from "../../../../../i18n/client";
import { primaryNavigation } from "../../config";

export interface IBottomNavigationBar {}

export const BOTTOM_NAV_BAR_HEIGHT = "56px";

const BottomNavigationBar: React.FC<IBottomNavigationBar> = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation("cs", "common");
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: BOTTOM_NAV_BAR_HEIGHT,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
          router.push(primaryNavigation[newValue].path);
        }}
        sx={{
          boxShadow: "0 -2px 0 0 rgba(0,0,0,0.09)",
        }}
      >
        {primaryNavigation.map((item, i) => (
          <BottomNavigationAction
            label={t(item.label)}
            icon={item.icon}
            key={i}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationBar;