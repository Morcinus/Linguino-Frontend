import { action } from "@storybook/addon-actions";

import { IAccountSettings } from "./AccountSettings";

const base: IAccountSettings = {
  accountErrors: [],
  email: "pepa.okurka@pepa.cz",
  name: "Pepa Okurka",
  username: "pepik123",
  onEmailChange: action("onEmailChange"),
  onNameChange: action("onNameChange"),
  onUsernameChange: action("onUsernameChange"),
  onPasswordChange: action("onPasswordChange"),
};

export const mockAccountSettingsProps = {
  base,
};
