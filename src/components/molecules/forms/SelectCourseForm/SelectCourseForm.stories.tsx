import { ComponentMeta, ComponentStory } from "@storybook/react";

import SelectCourseForm, { ISelectCourseForm } from "./SelectCourseForm";
import { mockSelectCourseFormProps } from "./SelectCourseForm.mocks";

export default {
  title: "molecules/forms/SelectCourseForm",
  component: SelectCourseForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectCourseForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectCourseForm> = (args) => (
  <SelectCourseForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSelectCourseFormProps.base,
} as ISelectCourseForm;
