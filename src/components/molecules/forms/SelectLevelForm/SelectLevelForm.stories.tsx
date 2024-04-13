import { ComponentMeta, ComponentStory } from "@storybook/react";

import SelectLevelForm, { ISelectLevelForm } from "./SelectLevelForm";
import { mockSelectLevelFormProps } from "./SelectLevelForm.mocks";

export default {
  title: "molecules/forms/SelectLevelForm",
  component: SelectLevelForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectLevelForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectLevelForm> = (args) => (
  <SelectLevelForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSelectLevelFormProps.base,
} as ISelectLevelForm;
