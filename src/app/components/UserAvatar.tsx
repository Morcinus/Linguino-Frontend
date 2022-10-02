import { Avatar, Box } from "@mui/material";

import useAuth from "../../util/hooks/useAuth";

export default function UserAvatar() {
  const { user } = useAuth();
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={
            user?.completedDailyGoal
              ? {
                  position: "relative",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    m: "-2px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(45deg, #2efd2d 0%, #5aec31 30%, #ff9100 100%)",
                  },
                }
              : {}
          }
        >
          <Avatar
            sx={{
              width: 35,
              height: 35,
              backgroundColor: "#4B4B4B",
              p: 0.5,
              border: "2px solid",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
