import { ComponentMeta, ComponentStory } from "@storybook/react";

import SelectTopicsForm, { ISelectTopicsForm } from "./SelectTopicsForm";
import { mockSelectTopicsFormProps } from "./SelectTopicsForm.mocks";

export default {
  title: "molecules/forms/SelectTopicsForm",
  component: SelectTopicsForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectTopicsForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectTopicsForm> = (args) => (
  <SelectTopicsForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSelectTopicsFormProps.base,
} as ISelectTopicsForm;
