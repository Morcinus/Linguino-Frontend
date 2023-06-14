import icons from "styles/icons";

import { Icon, IconButton, Typography } from "@mui/material";

export interface IStreak {
  completedDailyGoal: boolean;
  streak: number;
}

const Streak: React.FC<IStreak> = ({ completedDailyGoal, streak }) => {
  return (
    <>
      <IconButton size="small">
        <Icon
          sx={{
            fontSize: 30,
            color: completedDailyGoal ? "#F29800" : "#E5E5E5", // "#E5E5E5" : "#F29800",
          }}
        >
          {icons.streak}
        </Icon>
        <Typography
          variant="body1"
          sx={{
            color: completedDailyGoal === false ? "#E5E5E5" : undefined,
            mt: 0.4,
          }}
        >
          {streak || 0}
        </Typography>
      </IconButton>
    </>
  );
};

export default Streak;
