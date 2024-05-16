import { ComponentMeta, ComponentStory } from "@storybook/react";

import ChangeEmailForm, { IChangeEmailForm } from "./ChangeEmailForm";
import { mockChangeEmailFormProps } from "./ChangeEmailForm.mocks";

export default {
  title: "molecules/ChangeEmailForm",
  component: ChangeEmailForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChangeEmailForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChangeEmailForm> = (args) => (
  <ChangeEmailForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChangeEmailFormProps.base,
} as IChangeEmailForm;
