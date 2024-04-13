import { action } from "@storybook/addon-actions";

import { ISelectCourseForm } from "./SelectCourseForm";

const base: ISelectCourseForm = {
  onSubmit: action("onSubmit"),
};

export const mockSelectCourseFormProps = {
  base,
};
