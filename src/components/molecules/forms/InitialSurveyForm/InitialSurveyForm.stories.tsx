import { ComponentMeta, ComponentStory } from "@storybook/react";

import InitialSurveyForm, { IInitialSurveyForm } from "./InitialSurveyForm";
import { mockInitialSurveyFormProps } from "./InitialSurveyForm.mocks";

export default {
  title: "molecules/forms/InitialSurveyForm",
  component: InitialSurveyForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InitialSurveyForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InitialSurveyForm> = (args) => (
  <InitialSurveyForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInitialSurveyFormProps.base,
} as IInitialSurveyForm;
