import { action } from "@storybook/addon-actions";

import { IForgotPasswordForm } from "./ForgotPasswordForm";

const base: IForgotPasswordForm = {
  onEmailSent: action("onEmailSent"),
};

export const mockForgotPasswordFormProps = {
  base,
};
