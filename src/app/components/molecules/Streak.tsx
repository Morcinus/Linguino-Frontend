import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { IconButton, Typography } from "@mui/material";

import useAuth from "../../../infrastructure/services/AuthProvider";

export default function Streak() {
  const { user } = useAuth();

  return (
    <>
      <IconButton size="small">
        <LocalFireDepartmentIcon
          sx={{
            fontSize: 30,
            color: user?.completedDailyGoal ? "#F29800" : "#E5E5E5", // "#E5E5E5" : "#F29800",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: user?.completedDailyGoal === false ? "#E5E5E5" : undefined,
            mt: 0.4,
          }}
        >
          {user?.streak || 0}
        </Typography>
      </IconButton>
    </>
  );
}
