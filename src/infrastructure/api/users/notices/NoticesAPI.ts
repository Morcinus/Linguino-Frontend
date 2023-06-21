import API from "infrastructure/api/API";
import { parseQueryParams } from "util/functions/api";

import { Notice } from "./Notices";

export interface NoticeParams {}

const NoticesAPI = {
  URI: (userId: ID) => `users/${userId}/notices`,

  async getNotices(
    userId: ID,
    params: NoticeParams = {}
  ): Promise<Array<Notice>> {
    return API.get(`${this.URI(userId)}?${parseQueryParams(params)}`);
  },

  async deleteNotice(userId: ID, noticeId: ID): Promise<void> {
    return API.delete(`${this.URI(userId)}/${noticeId}`);
  },
};

export default NoticesAPI;
