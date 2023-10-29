import { Modify } from "domain/models/utils/modify";
import { FetchHook } from "infrastructure/api/API";
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
};

export default FollowersAPI;
