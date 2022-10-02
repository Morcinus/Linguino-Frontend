import { i18n } from "next-i18next";

import theme from "../../styles/theme";
import { ColorType } from "../../types/colors";
import { LessonType } from "../../types/lessons";

export function getLessonColor(lessonType: LessonType, colorType: ColorType) {
  let color;
  switch (lessonType) {
    case "SPEAKING":
      color = theme.palette.speaking;
      break;
    case "PRONUNCIATION":
      color = theme.palette.pronunciation;
      break;
    case "VOCABULARY":
      color = theme.palette.vocabulary;
      break;
    case "GRAMMAR":
      color = theme.palette.grammar;
      break;
    case "READING":
      color = theme.palette.reading;
      break;
    case "LISTENING":
      color = theme.palette.listening;
      break;
  }

  switch (colorType) {
    case "LIGHT":
      return color?.light;
    case "MAIN":
      return color?.main;
    case "DARK":
      return color?.dark;
    default:
      return "#ffffff";
  }
}

export function getLessonName(lessonType: LessonType) {
  switch (lessonType) {
    case "SPEAKING":
      return i18n?.t("studying.speaking");
    case "PRONUNCIATION":
      return i18n?.t("studying.pronunciation");
    case "VOCABULARY":
      return i18n?.t("studying.vocabulary");
    case "GRAMMAR":
      return i18n?.t("studying.grammar");
    case "READING":
      return i18n?.t("studying.reading");
    case "LISTENING":
      return i18n?.t("studying.listening");
    default:
      return "";
  }
}
