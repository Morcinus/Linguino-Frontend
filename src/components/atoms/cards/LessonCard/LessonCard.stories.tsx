import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonCard, { ILessonCard } from "./LessonCard";
import { mockLessonCardProps } from "./LessonCard.mocks";

export default {
  title: "atoms/cards/LessonCard",
  component: LessonCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonCard> = (args) => (
  <LessonCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonCardProps.base,
} as ILessonCard;
