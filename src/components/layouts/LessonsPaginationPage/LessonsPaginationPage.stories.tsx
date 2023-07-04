import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonsPaginationPage, {
  ILessonsPaginationPage,
} from "./LessonsPaginationPage";
import { mockLessonsPaginationPageProps } from "./LessonsPaginationPage.mocks";

export default {
  title: "layouts/LessonsPaginationPage",
  component: LessonsPaginationPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonsPaginationPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonsPaginationPage> = (args) => (
  <LessonsPaginationPage {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonsPaginationPageProps.base,
} as ILessonsPaginationPage;
