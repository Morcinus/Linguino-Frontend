import { action } from "@storybook/addon-actions";

import { IChangePasswordForm } from "./ChangePasswordForm";

const base: IChangePasswordForm = {
  onPasswordChanged: action("onPasswordChanged"),
  resetToken: "dfafnklfnlkgsjf",
  email: "pepa@example.com",
};

export const mockChangePasswordFormProps = {
  base,
};
