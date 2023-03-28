import { action } from "@storybook/addon-actions";

import { ISelectTopicsForm } from "./SelectTopicsForm";

const base: ISelectTopicsForm = {
  courseId: "fdskjnlfadl",
  onSubmit: action("onSubmit"),
};

export const mockSelectTopicsFormProps = {
  base,
};
