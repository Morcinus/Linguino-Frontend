import { action } from "@storybook/addon-actions";

import { ISelectGoalForm } from "./SelectGoalForm";

const base: ISelectGoalForm = {
  onSubmit: action("onSubmit"),
};

export const mockSelectGoalFormProps = {
  base,
};
