import { Story } from "@storybook/react";

import {
  NoticeContext,
  NoticeContextType,
} from "../infrastructure/services/NoticeProvider";

export default function NoticeDecorator(Story: Story) {
  const mock: NoticeContextType = {
    addNotices: () => console.log("addNotices"),
    deleteNotice: () => console.log("deleteNotice"),
    fetchNotices: async () => console.log("fetchNotices"),
    popNotice: () => console.log("popNotice"),
    notices: [],
  };

  return (
    <div>
      <NoticeContext.Provider value={mock}>
        <Story />
      </NoticeContext.Provider>
    </div>
  );
}
