import { ComponentMeta, ComponentStory } from "@storybook/react";

import SelectStartForm, { ISelectStartForm } from "./SelectStartForm";
import { mockSelectStartFormProps } from "./SelectStartForm.mocks";

export default {
  title: "molecules/forms/SelectStartForm",
  component: SelectStartForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectStartForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectStartForm> = (args) => (
  <SelectStartForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSelectStartFormProps.base,
} as ISelectStartForm;
