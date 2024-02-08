import { useTranslation } from "i18n/client";
import icons from "styles/icons";

import { Icon } from "@mui/material";

import FullWidthButton from "../FullWidthButton/FullWidthButton";

export interface IExerciseContinueButton {
  onClick: () => void;
  state: "DISABLED" | "CHECK" | "CONTINUE";
}

const ExerciseContinueButton: React.FC<IExerciseContinueButton> = ({
  onClick,
  state,
}) => {
  const { t } = useTranslation("cs", "common");

  return (
    <FullWidthButton
      onClick={onClick}
      disabled={state === "DISABLED"}
      endIcon={state === "CONTINUE" ? <Icon>{icons.next}</Icon> : undefined}
    >
      {t(state === "CONTINUE" ? "exercise.continue" : "exercise.check")}
    </FullWidthButton>
  );
};

export default ExerciseContinueButton;
