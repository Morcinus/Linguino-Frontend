import { action } from "@storybook/addon-actions";

import { IExerciseContinueButton } from "./ExerciseContinueButton";

const base: IExerciseContinueButton = {
  disabled: false,
  onClick: action("onClick"),
  text: "exercise.continue",
};

export const mockExerciseContinueButtonProps = {
  base,
};
