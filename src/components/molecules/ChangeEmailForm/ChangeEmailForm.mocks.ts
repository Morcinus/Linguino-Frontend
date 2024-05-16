import { action } from "@storybook/addon-actions";

import { IChangeEmailForm } from "./ChangeEmailForm";

const base: IChangeEmailForm = {
  onEmailSent: action("onEmailSent"),
};

export const mockChangeEmailFormProps = {
  base,
};
