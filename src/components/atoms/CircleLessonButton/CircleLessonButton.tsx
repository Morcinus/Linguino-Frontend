import { LessonType } from "infrastructure/api/user/courses/lessons/Lessons";
import theme from "styles/theme";
import { getLessonColor } from "util/functions/lessons";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface ICircleLessonButton {
  title: string;
  icon?: string;
  lessonType?: LessonType;
  lessonId: ID;
  active?: boolean;
}

const CircleLessonButton: React.FC<ICircleLessonButton> = ({
  icon,
  title,
  lessonType,
  lessonId,
  active,
}) => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        <Box
          sx={{
            backgroundColor: active ? "#E0E0E0" : undefined,
            width: "102px",
            height: "102px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            sx={{
              backgroundColor: lessonType
                ? getLessonColor(lessonType)
                : undefined,
              color: "white",
              padding: "20px",
              border: "6px solid white",
              filter: "drop-shadow(0px 4px 0px rgba(212, 212, 212, 0.50));",
              "&:hover": {
                bgcolor: lessonType ? getLessonColor(lessonType) : undefined,
                padding: "22px",
              },
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
        </Box>
        <Typography variant="subtitle2">{title}</Typography>
      </Box>
    </>
  );
};

export default CircleLessonButton;
