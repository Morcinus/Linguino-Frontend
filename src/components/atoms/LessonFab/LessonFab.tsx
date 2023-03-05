import * as MUIcon from "@mui/icons-material";
import { Fab } from "@mui/material";

import { LessonType } from "../../../domain/models/types/lessons";
import { useTranslation } from "../../../i18n/client";
import { getLessonColor } from "../../../util/functions/lessons";

export interface ILessonFab {
  icon?: keyof typeof MUIcon;
  lessonType: LessonType;
  onClick?: () => void;
}

const LessonFab: React.FC<ILessonFab> = ({ icon, lessonType, onClick }) => {
  const { t } = useTranslation("cs", "common");
  const Icon = icon && MUIcon[icon];

  return (
    <Fab
      variant="extended"
      sx={{
        position: "fixed",
        right: 16,
        bottom: 16,
        backgroundColor: getLessonColor(lessonType, "MAIN"),
        color: getLessonColor(lessonType, "ON_MAIN"),
        "&:hover": {
          backgroundColor: getLessonColor(lessonType, "LIGHT"),
        },
      }}
      onClick={onClick}
    >
      {t("study")}
      {Icon && <Icon sx={{ ml: 1 }} />}
    </Fab>
  );
};

export default LessonFab;
