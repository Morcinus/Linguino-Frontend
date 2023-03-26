import { ComponentMeta, ComponentStory } from "@storybook/react";

import ChangePasswordForm, { IChangePasswordForm } from "./ChangePasswordForm";
import { mockChangePasswordFormProps } from "./ChangePasswordForm.mocks";

export default {
  title: "molecules/ChangePasswordForm",
  component: ChangePasswordForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChangePasswordForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChangePasswordForm> = (args) => (
  <ChangePasswordForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChangePasswordFormProps.base,
} as IChangePasswordForm;
