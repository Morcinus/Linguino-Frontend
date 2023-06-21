import { ComponentMeta, ComponentStory } from "@storybook/react";

import AdvertisementNotice, {
  IAdvertisementNotice,
} from "./AdvertisementNotice";
import { mockAdvertisementNoticeProps } from "./AdvertisementNotice.mocks";

export default {
  title: "atoms/notices/AdvertisementNotice",
  component: AdvertisementNotice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AdvertisementNotice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AdvertisementNotice> = (args) => (
  <AdvertisementNotice {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAdvertisementNoticeProps.base,
} as IAdvertisementNotice;
