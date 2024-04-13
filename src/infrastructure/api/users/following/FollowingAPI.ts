import { Modify } from "domain/models/utils/modify";
import { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Following } from "./Following";

export interface FollowingParams {}

const FollowingAPI = {
  URI: (userId: Id) => `users/${userId}/following`,

  useFollowing(
    userId: Id,
    params: FollowingParams = {}
  ): Modify<FetchHook<Array<Following>>, { following: Array<Following> }> {
    const { data, ...rest } = useAPI<Array<Following>>(
      `${this.URI(userId)}?${parseQueryParams(params)}`
    );
    return { following: data, ...rest };
  },
};

export default FollowingAPI;
