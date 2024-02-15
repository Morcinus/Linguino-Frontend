import icons from "styles/icons";

import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export interface IStreak {
  completedDailyGoal?: boolean;
  streak?: number;
}

const Streak: React.FC<IStreak> = ({ completedDailyGoal, streak }) => {
  return (
    <>
      <IconButton size="small">
        <Icon
          sx={{
            fontSize: 30,
            color: completedDailyGoal ? "#F29800" : "#E5E5E5",
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
          {streak ?? 0}
        </Typography>
      </IconButton>
    </>
  );
};

export default Streak;
