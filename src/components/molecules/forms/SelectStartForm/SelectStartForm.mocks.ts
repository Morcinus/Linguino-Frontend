import { action } from "@storybook/addon-actions";

import { ISelectStartForm } from "./SelectStartForm";

const base: ISelectStartForm = {
  onSubmit: action("onSubmit"),
};

export const mockSelectStartFormProps = {
  base,
};
