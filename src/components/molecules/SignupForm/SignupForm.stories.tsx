import { ComponentMeta, ComponentStory } from "@storybook/react";

import SignupForm, { ISignupForm } from "./SignupForm";
import { mockSignupFormProps } from "./SignupForm.mocks";

export default {
  title: "molecules/SignupForm",
  component: SignupForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SignupForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignupForm> = (args) => (
  <SignupForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSignupFormProps.base,
} as ISignupForm;
