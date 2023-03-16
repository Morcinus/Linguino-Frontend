import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonItemCard, { ILessonItemCard } from "./LessonItemCard";
import { mockLessonItemCardProps } from "./LessonItemCard.mocks";

export default {
  title: "molecules/LessonItemCard",
  component: LessonItemCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonItemCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonItemCard> = (args) => (
  <LessonItemCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonItemCardProps.base,
} as ILessonItemCard;
