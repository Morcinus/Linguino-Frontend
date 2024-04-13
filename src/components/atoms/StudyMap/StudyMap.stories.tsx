import { ComponentMeta, ComponentStory } from "@storybook/react";

import StudyMap, { IStudyMap } from "./StudyMap";
import { mockStudyMapProps } from "./StudyMap.mocks";

export default {
  title: "atoms/StudyMap",
  component: StudyMap,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StudyMap>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StudyMap> = (args) => (
  <StudyMap {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStudyMapProps.base,
} as IStudyMap;
