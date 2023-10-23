import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Challenge } from "./ActiveChallenges";

export interface ChallengeParams {}

const ActiveChallengesAPI = {
  URI: "user/active-challenges",

  useChallenges(
    params: ChallengeParams = {}
  ): Modify<FetchHook<Array<Challenge>>, { challenges: Array<Challenge> }> {
    const { data, ...rest } = useAPI<Array<Challenge>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { challenges: data, ...rest };
  },

  async updateChallenge(challenge: Partial<Challenge>): Promise<Challenge> {
    return API.patch(`${this.URI}/${challenge.id}`, challenge);
  },
};

export default ActiveChallengesAPI;
