import useAuth from "infrastructure/services/AuthProvider";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";

import { useTranslation } from "../../../../../i18n/client";
import { primaryNavigation } from "../../config";

export interface IBottomNavigationBar {
  pathname: string;
}

export const BOTTOM_NAV_BAR_HEIGHT = 56;

const BottomNavigationBar: React.FC<IBottomNavigationBar> = ({ pathname }) => {
  const [value, setValue] = useState<number | false>(false);
  const { t } = useTranslation("common");
  const router = useRouter();
  const { user } = useAuth();

  // Change selected tab if path changed
  useEffect(() => {
    let newValue: boolean | number = false;

    for (let i = 0; i < primaryNavigation.length; i++) {
      if (primaryNavigation[i].path === pathname) {
        newValue = i;
      }
    }

    setValue(newValue);
  }, [pathname]);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: `${BOTTOM_NAV_BAR_HEIGHT}px`,
        zIndex: 1,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);

          if (primaryNavigation[newValue].path === "/profile")
            router.push(`/users/${user?.id}`);
          else router.push(primaryNavigation[newValue].path);
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
