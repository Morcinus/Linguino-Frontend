import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Following } from "./Following";

export interface FollowingParams {}

const FollowingAPI = {
  URI: (userId: ID) => `users/${userId}/following`,

  useFollowing(
    userId: ID,
    params: FollowingParams = {}
  ): Modify<FetchHook<Array<Following>>, { following: Array<Following> }> {
    const { data, ...rest } = useAPI<Array<Following>>(
      `${this.URI(userId)}?${parseQueryParams(params)}`
    );
    return { following: data, ...rest };
  },

  async updateFollowing(
    userId: ID,
    following: Partial<Following>
  ): Promise<Following> {
    return API.put(`${this.URI(userId)}/${following.id}`, following);
  },
};

export default FollowingAPI;