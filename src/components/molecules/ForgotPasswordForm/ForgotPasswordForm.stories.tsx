import { ComponentMeta, ComponentStory } from "@storybook/react";

import ForgotPasswordForm, { IForgotPasswordForm } from "./ForgotPasswordForm";
import { mockForgotPasswordFormProps } from "./ForgotPasswordForm.mocks";

export default {
  title: "molecules/ForgotPasswordForm",
  component: ForgotPasswordForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ForgotPasswordForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForgotPasswordForm> = (args) => (
  <ForgotPasswordForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockForgotPasswordFormProps.base,
} as IForgotPasswordForm;
