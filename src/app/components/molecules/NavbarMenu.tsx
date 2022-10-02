import React from "react";

import { useTranslation } from "next-i18next";
import Link from "next/link";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FaceIcon from "@mui/icons-material/Face";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { Divider, IconButton, Menu, Tooltip } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import useAuth from "../../../infrastructure/services/AuthProvider";
import UserAvatar from "./UserAvatar";

export default function NavbarMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { logout, user } = useAuth();
  const open = Boolean(anchorEl);
  const { t } = useTranslation("common");

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Tooltip
        title={
          user?.completedDailyGoal
            ? t("user-avatar-circle-tooltip")
            : t("open-menu")
        }
      >
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <UserAvatar />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))",
            mt: 0,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link href="/profile">
          <MenuItem onClick={handleClose}>
            <FaceIcon style={{ marginRight: 10 }} />
            {t("other.my-profile")}
          </MenuItem>
        </Link>
        <Link href="/extend-subscription">
          <MenuItem onClick={handleClose}>
            <AccountBalanceWalletIcon style={{ marginRight: 10 }} />
            {t("other.subscription")}
          </MenuItem>
        </Link>
        <Divider />
        <Link href="/help">
          <MenuItem onClick={handleClose}>
            <HelpOutlineIcon style={{ marginRight: 10 }} />
            {t("other.help")}
          </MenuItem>
        </Link>
        <Link href="/settings">
          <MenuItem onClick={handleClose}>
            <SettingsIcon style={{ marginRight: 10 }} />
            {t("other.settings")}
          </MenuItem>
        </Link>
        <MenuItem onClick={logout}>
          <ExitToAppIcon style={{ marginRight: 10 }} />
          {t("other.logout")}
        </MenuItem>
      </Menu>
    </>
  );
}
