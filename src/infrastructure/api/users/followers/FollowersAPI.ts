import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Follower } from "./Followers";

export interface FollowerParams {}

const FollowersAPI = {
  URI: (userId: ID) => `users/${userId}/followers`,

  useFollowers(
    userId: ID,
    params: FollowerParams = {}
  ): Modify<FetchHook<Array<Follower>>, { followers: Array<Follower> }> {
    const { data, ...rest } = useAPI<Array<Follower>>(
      `${this.URI(userId)}?${parseQueryParams(params)}`
    );
    return { followers: data, ...rest };
  },

  async updateFollower(
    userId: ID,
    follower: Partial<Follower>
  ): Promise<Follower> {
    return API.put(`${this.URI(userId)}/${follower.id}`, follower);
  },
};

export default FollowersAPI;
