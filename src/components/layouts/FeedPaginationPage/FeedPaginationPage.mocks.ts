import { action } from "@storybook/addon-actions";

import { IFeedPaginationPage } from "./FeedPaginationPage";

const base: IFeedPaginationPage = {
  index: 1,
  displayDivider: true,
  onDividerDisplayed: action("onDividerDisplayed"),
};

export const mockFeedPaginationPageProps = {
  base,
};
