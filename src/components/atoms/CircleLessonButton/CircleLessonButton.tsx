import { LessonType } from "infrastructure/api/user/courses/lessons/Lessons";
import theme from "styles/theme";
import { getLessonColor } from "util/functions/lessons";

import { useRouter } from "next/navigation";

import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";

export interface ICircleLessonButton {
  title: string;
  icon?: string;
  lessonType?: LessonType;
  lessonId: ID;
}

const CircleLessonButton: React.FC<ICircleLessonButton> = ({
  icon,
  title,
  lessonType,
  lessonId,
}) => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
      <IconButton
        size="large"
        sx={{
          backgroundColor: lessonType ? getLessonColor(lessonType) : undefined,
          color: "white",
          padding: "20px",
          border: "6px solid white",
          filter: "drop-shadow(0px 4px 0px rgba(212, 212, 212, 0.50));",
        }}
        onClick={() => router.push(`/lessons/${lessonId}`)}
      >
        <Icon
          sx={{
            fontSize: desktop ? 40 : 35,
            filter: "drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.10));",
          }}
        >
          {icon}
        </Icon>
      </IconButton>
      <Typography variant="subtitle2">{title}</Typography>
    </Box>
  );
};

export default CircleLessonButton;
