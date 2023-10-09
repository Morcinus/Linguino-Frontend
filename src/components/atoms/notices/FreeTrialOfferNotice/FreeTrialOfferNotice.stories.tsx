import { ComponentMeta, ComponentStory } from "@storybook/react";

import FreeTrialOfferNotice, {
  IFreeTrialOfferNotice,
} from "./FreeTrialOfferNotice";
import { mockFreeTrialOfferNoticeProps } from "./FreeTrialOfferNotice.mocks";

export default {
  title: "atoms/notices/FreeTrialOfferNotice",
  component: FreeTrialOfferNotice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FreeTrialOfferNotice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FreeTrialOfferNotice> = (args) => (
  <FreeTrialOfferNotice {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFreeTrialOfferNoticeProps.base,
} as IFreeTrialOfferNotice;
