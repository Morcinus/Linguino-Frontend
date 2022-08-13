import React from "react";

import { Avatar, CircularProgress } from "@mui/material";

import useAuth from "../util/useAuth";

export default function UserAvatar() {
  const { user } = useAuth();
  return (
    <>
      {user?.completedDailyGoal == true && (
        <CircularProgress
          variant="determinate"
          value={100}
          style={{
            color: "#ffdd00",
            position: "absolute",
          }}
        />
      )}
      <Avatar
        sx={{
          width: 32,
          height: 32,
          backgroundColor: "#4B4B4B",
        }}
      />
    </>
  );
}
