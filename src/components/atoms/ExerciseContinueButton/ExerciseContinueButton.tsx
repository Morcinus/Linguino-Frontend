import { useTranslation } from "i18n/client";

import FullWidthButton from "../FullWidthButton/FullWidthButton";

export interface IExerciseContinueButton {
  onClick: () => void;
  disabled: boolean;
  text: string;
}

const ExerciseContinueButton: React.FC<IExerciseContinueButton> = ({
  onClick,
  disabled,
  text,
}) => {
  const { t } = useTranslation("cs", "common");

  return (
    <FullWidthButton onClick={onClick} disabled={disabled}>
      {t(text)}
    </FullWidthButton>
  );
};

export default ExerciseContinueButton;
