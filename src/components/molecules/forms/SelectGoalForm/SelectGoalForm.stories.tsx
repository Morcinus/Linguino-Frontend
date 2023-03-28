import { ComponentMeta, ComponentStory } from "@storybook/react";

import SelectGoalForm, { ISelectGoalForm } from "./SelectGoalForm";
import { mockSelectGoalFormProps } from "./SelectGoalForm.mocks";

export default {
  title: "molecules/forms/SelectGoalForm",
  component: SelectGoalForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectGoalForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectGoalForm> = (args) => (
  <SelectGoalForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSelectGoalFormProps.base,
} as ISelectGoalForm;
