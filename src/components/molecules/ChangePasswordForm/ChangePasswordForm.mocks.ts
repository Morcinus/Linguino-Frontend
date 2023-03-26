import { action } from "@storybook/addon-actions";

import { IChangePasswordForm } from "./ChangePasswordForm";

const base: IChangePasswordForm = {
  onPasswordChanged: action("onPasswordChanged"),
  resetToken: "dfafnklfnlkgsjf",
};

export const mockChangePasswordFormProps = {
  base,
};
