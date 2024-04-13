import { action } from "@storybook/addon-actions";

import { IExerciseContinueButton } from "./ExerciseContinueButton";

const base: IExerciseContinueButton = {
  state: "CONTINUE",
  onClick: action("onClick"),
};

export const mockExerciseContinueButtonProps = {
  base,
};
