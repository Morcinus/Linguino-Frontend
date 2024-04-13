import { action } from "@storybook/addon-actions";

import { ISelectLevelForm } from "./SelectLevelForm";

const base: ISelectLevelForm = {
  onSubmit: action("onSubmit"),
};

export const mockSelectLevelFormProps = {
  base,
};
