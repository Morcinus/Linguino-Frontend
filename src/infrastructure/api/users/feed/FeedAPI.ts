import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { FeedItem } from "./Feed";

export interface FeedParams {}

const FeedAPI = {
  URI: (userId: ID) => `users/${userId}/feed`,

  useFeed(
    userId: ID,
    params: FeedParams = {}
  ): Modify<FetchHook<Array<FeedItem>>, { feed: Array<FeedItem> }> {
    const { data, ...rest } = useAPI<Array<FeedItem>>(
      `${this.URI(userId)}?${parseQueryParams(params)}`
    );
    return { feed: data, ...rest };
  },

  async updateFeed(userId: ID, feed: Partial<FeedItem>): Promise<FeedItem> {
    return API.put(`${this.URI(userId)}/${feed.id}`, feed);
  },
};

export default FeedAPI;
