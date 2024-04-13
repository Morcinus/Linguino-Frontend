import { action } from "@storybook/addon-actions";

import { IInitialSurveyForm } from "./InitialSurveyForm";

const base: IInitialSurveyForm = {
  onSubmit: action("onSubmit"),
};

export const mockInitialSurveyFormProps = {
  base,
};
